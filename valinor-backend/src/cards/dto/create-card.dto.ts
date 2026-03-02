import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  boardId: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  columnId: number;

  @ApiProperty()
  @IsString()
  title: string;
}