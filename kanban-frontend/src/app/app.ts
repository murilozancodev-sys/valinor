import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardsService } from './board/boards.service';
import { CardsService } from './cards/cards.service';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, BoardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  board: any;

  newCardTitle = '';
  selectedColumnId: number | null = null;

  constructor(
    private boardsService: BoardsService,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.loadBoard();
  }

  loadBoard() {
    this.boardsService.getBoards().subscribe((data) => {
      this.board = data[0];
    });
  }

  createCard() {
    if (!this.selectedColumnId || !this.newCardTitle.trim()) return;

    this.cardsService
      .createCard({
        boardId: this.board.id,
        columnId: this.selectedColumnId,
        title: this.newCardTitle,
      })
      .subscribe(() => {
        this.newCardTitle = '';
        this.selectedColumnId = null;
        this.loadBoard();
      });
  }

  moveCard = (cardId: number, fromColumnId: number, toColumnId: number) => {
    this.cardsService
      .moveCard({
        boardId: this.board.id,
        fromColumnId,
        toColumnId,
        cardId,
      })
      .subscribe(() => {
        this.loadBoard();
      });
  };

  deleteCard = (cardId: number, columnId: number) => {
    this.cardsService
      .deleteCard({
        boardId: this.board.id,
        columnId,
        cardId,
      })
      .subscribe(() => {
        this.loadBoard();
      });
  };
}
