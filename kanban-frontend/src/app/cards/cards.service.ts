import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private api: ApiService) {}

  createCard(data: {
    boardId: number;
    columnId: number;
    title: string;
  }) {
    return this.api.post('cards', data);
  }

  moveCard(data: {
    boardId: number;
    fromColumnId: number;
    toColumnId: number;
    cardId: number;
  }) {
    return this.api.put('cards/move', data);
  }
  deleteCard(data: {
  boardId: number;
  columnId: number;
  cardId: number;
}) {
  return this.api.delete('cards', data);
}

}