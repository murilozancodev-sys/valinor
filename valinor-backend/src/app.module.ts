import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    BoardsModule,
    CardsModule,
  ],
})
export class AppModule {}