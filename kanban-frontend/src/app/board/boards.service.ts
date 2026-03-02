import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private api: ApiService) {}

  getBoards() {
    return this.api.get<any[]>('boards');
  }
}