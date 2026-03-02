import { Injectable, NotFoundException } from '@nestjs/common';

type Card = {
  id: number;
  title: string;
};

type Column = {
  id: number;
  name: string;
  cards: Card[];
};

type Board = {
  id: number;
  name: string;
  columns: Column[];
};

@Injectable()
export class BoardsService {

  private boards: Board[] = [
    {
      id: 1,
      name: "Kanban",
      columns: [
        { id: 1, name: "A fazer", cards: [] },
        { id: 2, name: "Em progresso", cards: [] },
        { id: 3, name: "Concluído", cards: [] }
      ]
    }
  ];

  getBoards() {
    return this.boards;
  }

  addCard(boardId: number, columnId: number, title: string) {
    const board = this.boards.find(b => b.id == boardId);
    if (!board) {
      throw new NotFoundException('Board não encontrado');
    }

    const column = board.columns.find(c => c.id == columnId);
    if (!column) {
      throw new NotFoundException('Coluna não encontrada');
    }

    const newCard: Card = {
      id: Date.now(),
      title
    };

    column.cards.push(newCard);

    return newCard;
  }

  moveCard(
    boardId: number,
    fromColumnId: number,
    toColumnId: number,
    cardId: number
  ) {
    const board = this.boards.find(b => b.id == boardId);
    if (!board) {
      throw new NotFoundException('Board não encontrado');
    }

    const fromColumn = board.columns.find(c => c.id == fromColumnId);
    if (!fromColumn) {
      throw new NotFoundException('Coluna de origem não encontrada');
    }

    const toColumn = board.columns.find(c => c.id == toColumnId);
    if (!toColumn) {
      throw new NotFoundException('Coluna de destino não encontrada');
    }

    const cardIndex = fromColumn.cards.findIndex(c => c.id == cardId);
    if (cardIndex === -1) {
      throw new NotFoundException('Card não encontrado');
    }

    const [card] = fromColumn.cards.splice(cardIndex, 1);
    toColumn.cards.push(card);

    return { message: 'Card movido com sucesso' };
  }

  deleteCard(boardId: number, columnId: number, cardId: number) {
    const board = this.boards.find(b => b.id == boardId);
    if (!board) {
      throw new NotFoundException('Board não encontrado');
    }

    const column = board.columns.find(c => c.id == columnId);
    if (!column) {
      throw new NotFoundException('Coluna não encontrada');
    }

    const cardIndex = column.cards.findIndex(c => c.id == cardId);
    if (cardIndex === -1) {
      throw new NotFoundException('Card não encontrado');
    }

    column.cards.splice(cardIndex, 1);

    return { message: 'Card removido com sucesso' };
  }

updateCard(
  boardId: number,
  columnId: number,
  cardId: number,
  title: string,
) {
  const board = this.boards.find(b => b.id == boardId);
  if (!board) {
    throw new NotFoundException('Board não encontrado');
  }

  const column = board.columns.find(c => c.id == columnId);
  if (!column) {
    throw new NotFoundException('Coluna não encontrada');
  }

  const card = column.cards.find(c => c.id == cardId);
  if (!card) {
    throw new NotFoundException('Card não encontrado');
  }

  card.title = title;

  return {
    message: 'Card atualizado com sucesso',
    card,
  };
}

}