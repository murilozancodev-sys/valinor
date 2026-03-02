import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteCardDto {

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  boardId: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  columnId: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  cardId: number;
}