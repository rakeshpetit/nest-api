import { LoggerMiddleware } from './../../middlewares/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ItemsController } from './controller/items.controller';
import { ItemsService } from './service/items.service';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      .exclude(
        { path: 'items', method: RequestMethod.GET },
        { path: 'items', method: RequestMethod.POST },
      )
      .forRoutes(ItemsController);
  }
}

function logger(req, res, next) {
  console.log(`functional middleware...`);
  next();
}
