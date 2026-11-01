import fs from 'node:fs/promises';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../database/generated/client/client.js';

const rows = JSON.parse(await fs.readFile('../../tmp/pdfs/final_bank.json', 'utf8'));
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const bank = await prisma.questionBank.upsert({ where: { slug: 'ngan-hang-430-2026' }, update: { title: 'Ngân hàng 430 câu hỏi đấu thầu 2026', status: 'PUBLISHED' }, create: { slug: 'ngan-hang-430-2026', title: 'Ngân hàng 430 câu hỏi đấu thầu 2026', description: 'Đáp án đã chốt sau rà soát pháp lý', status: 'PUBLISHED' } });
for (const row of rows) {
  await prisma.question.upsert({ where: { questionBankId_position: { questionBankId: bank.id, position: row.position } }, update: { status: 'PUBLISHED', currentVersion: 1, versions: { deleteMany: {}, create: { version: 1, content: row.content, options: { create: row.options.map((content, index) => ({ content, position: index + 1, isCorrect: 'ABCD'[index] === row.answer })) } } } }, create: { questionBankId: bank.id, position: row.position, status: 'PUBLISHED', versions: { create: { version: 1, content: row.content, options: { create: row.options.map((content, index) => ({ content, position: index + 1, isCorrect: 'ABCD'[index] === row.answer })) } } } } });
}
console.log(await prisma.question.count({ where: { questionBankId: bank.id, deletedAt: null } }));
await prisma.$disconnect();
