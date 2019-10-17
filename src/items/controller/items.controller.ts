import { Item } from '../interfaces/item.interface';
import { ItemsService } from '../service/items.service';
import { CreateItemDto } from '../dto/create-item.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }
  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return this.itemsService.delete(id);
  }
}
