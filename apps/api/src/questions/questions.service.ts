import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateQuestionDto } from './questions.dto.js';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}
  async list() {
    return this.prisma.question.findMany({ where: { deletedAt: null, status: 'PUBLISHED' }, orderBy: { position: 'asc' }, include: { versions: { orderBy: { version: 'desc' }, take: 1, include: { options: { orderBy: { position: 'asc' } } } } } });
  }
  async update(id: string, dto: UpdateQuestionDto) {
    if (dto.options.filter((option) => option.isCorrect).length !== 1) throw new BadRequestException({ code: 'INVALID_CORRECT_ANSWER', message: 'Phải chọn đúng một đáp án.' });
    const question = await this.prisma.question.findUnique({ where: { id }, include: { versions: { orderBy: { version: 'desc' }, take: 1 } } });
    if (!question || question.deletedAt) throw new NotFoundException({ code: 'QUESTION_NOT_FOUND', message: 'Không tìm thấy câu hỏi.' });
    const version = question.currentVersion + 1;
    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.question.update({ where: { id }, data: { currentVersion: version, position: dto.position ?? question.position, updatedAt: new Date() } });
      await tx.questionVersion.create({ data: { questionId: id, version, content: dto.content, explanation: dto.explanation ?? null, source: dto.source ?? null, options: { create: dto.options.map((option, position) => ({ content: option.content, position: position + 1, isCorrect: option.isCorrect })) } } });
      return updated;
    });
  }
}
