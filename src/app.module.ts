import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/controller/items.controller';
import { ItemsService } from './items/service/items.service';
import { ItemsModule } from './items/module/items.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/TodoApp'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
