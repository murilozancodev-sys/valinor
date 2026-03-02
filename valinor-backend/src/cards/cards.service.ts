import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardsService } from '../boards/boards.service';

@Injectable()
export class CardsService {
  constructor(private boardsService: BoardsService) {}

  createCard(boardId: number, columnId: number, title: string) {
    return this.boardsService.addCard(boardId, columnId, title);
  }

  moveCard(boardId: number, fromColumnId: number, toColumnId: number, cardId: number) {
    return this.boardsService.moveCard(boardId, fromColumnId, toColumnId, cardId);
  }

  deleteCard(boardId: number, columnId: number, cardId: number) {
    return this.boardsService.deleteCard(boardId, columnId, cardId);
  }

  updateCard(boardId: number, columnId: number, cardId: number, title: string) {
    return this.boardsService.updateCard(boardId, columnId, cardId, title);
  }
}