import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UpdateCardDto {
  @IsNumber()
  boardId: number;

  @IsNumber()
  columnId: number;

  @IsNumber()
  cardId: number;

  @IsString()
  @IsNotEmpty()
  title: string;
}