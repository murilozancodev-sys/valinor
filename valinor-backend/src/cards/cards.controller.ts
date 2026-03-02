import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { CardsService } from './cards.service';
import { MoveCardDto } from './dto/move-card.dto';
import { CreateCardDto } from './dto/create-card.dto';
import { DeleteCardDto } from './dto/delete-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  createCard(@Body() body: CreateCardDto) {
    return this.cardsService.createCard(
      body.boardId,
      body.columnId,
      body.title,
    );
  }

  @Put('move')
  moveCard(@Body() body: MoveCardDto) {
    return this.cardsService.moveCard(
      body.boardId,
      body.fromColumnId,
      body.toColumnId,
      body.cardId,
    );
  }

  @Delete()
  deleteCard(@Body() body: DeleteCardDto) {
    return this.cardsService.deleteCard(
      body.boardId,
      body.columnId,
      body.cardId,
    );
  }
}