import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class MoveCardDto {

  @Type(() => Number)
  @IsNumber()
  boardId: number;

  @Type(() => Number)
  @IsNumber()
  fromColumnId: number;

  @Type(() => Number)
  @IsNumber()
  toColumnId: number;

  @Type(() => Number)
  @IsNumber()
  cardId: number;
}