import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsInt, IsOptional, IsString, MaxLength, Min, ValidateNested } from 'class-validator';

export class AnswerOptionDto {
  @IsString() @MaxLength(10000) content!: string;
  @IsBoolean() isCorrect!: boolean;
}
export class UpdateQuestionDto {
  @IsString() @MaxLength(10000) content!: string;
  @IsOptional() @IsString() @MaxLength(10000) explanation?: string;
  @IsOptional() @IsString() @MaxLength(1000) source?: string;
  @IsOptional() @IsInt() @Min(1) position?: number;
  @IsArray() @ArrayMinSize(4) @ArrayMaxSize(4) @ValidateNested({ each: true }) @Type(() => AnswerOptionDto) options!: AnswerOptionDto[];
}
