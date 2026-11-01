import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateQuestionDto } from './questions.dto.js';
import { QuestionsService } from './questions.service.js';

@ApiTags('questions')
@Controller({ path: 'questions', version: '1' })
export class QuestionsController {
  constructor(private readonly questions: QuestionsService) {}
  @Get() @ApiOkResponse() list() { return this.questions.list(); }
  @Put(':id') @ApiOkResponse() update(@Param('id') id: string, @Body() dto: UpdateQuestionDto) { return this.questions.update(id, dto); }
}
