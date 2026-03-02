import { Controller, Get, Post, Put, Delete, Patch, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateCardDto } from '../cards/dto/create-card.dto';
import { MoveCardDto } from '../cards/dto/move-card.dto';
import { DeleteCardDto } from '../cards/dto/delete-card.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  getBoards() {
    return this.boardsService.getBoards();
  }

}