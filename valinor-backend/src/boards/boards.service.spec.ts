import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from './boards.service';
import { NotFoundException } from '@nestjs/common';

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardsService],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  describe('addCard', () => {
    it('should create a card successfully', () => {
      const result = service.addCard(1, 1, 'Novo Card');

      expect(result).toHaveProperty('id');
      expect(result.title).toBe('Novo Card');
    });

    it('should throw error if board does not exist', () => {
      expect(() => {
        service.addCard(999, 1, 'Teste');
      }).toThrow(NotFoundException);
    });

    it('should throw error if column does not exist', () => {
      expect(() => {
        service.addCard(1, 999, 'Teste');
      }).toThrow(NotFoundException);
    });
  });

  describe('moveCard', () => {
    it('should move card successfully', () => {
      const card = service.addCard(1, 1, 'Mover tarefa');

      const response = service.moveCard(1, 1, 2, card.id);

      expect(response).toEqual({ message: 'Card movido com sucesso' });

      const boards = service.getBoards();
      expect(boards[0].columns[0].cards.length).toBe(0);
      expect(boards[0].columns[1].cards.length).toBe(1);
    });

    it('should throw error if card does not exist', () => {
      expect(() => {
        service.moveCard(1, 1, 2, 999);
      }).toThrow(NotFoundException);
    });
  });

  describe('deleteCard', () => {
    it('should delete card successfully', () => {
      const card = service.addCard(1, 1, 'Deletar tarefa');

      const response = service.deleteCard(1, 1, card.id);

      expect(response).toEqual({ message: 'Card removido com sucesso' });

      const boards = service.getBoards();
      expect(boards[0].columns[0].cards.length).toBe(0);
    });

    it('should throw error if card does not exist', () => {
      expect(() => {
        service.deleteCard(1, 1, 999);
      }).toThrow(NotFoundException);
    });
  });

  describe('updateCard', () => {
    it('should update card successfully', () => {
      const card = service.addCard(1, 1, 'Título antigo');

      const response = service.updateCard(1, 1, card.id, 'Título novo');

      expect(response.message).toBe('Card atualizado com sucesso');
      expect(response.card.title).toBe('Título novo');
    });

    it('should throw error if card does not exist', () => {
      expect(() => {
        service.updateCard(1, 1, 999, 'Novo título');
      }).toThrow(NotFoundException);
    });
  });
});