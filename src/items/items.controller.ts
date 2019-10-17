import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
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
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Item: ${param.id}`;
  //   }
  @Get(':id')
  findOne(@Param('id') id): Item {
     return this.itemsService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }
  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    return `Updated item: ${id} with name: ${updateItemDto.name} desc: ${updateItemDto.description}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted item: ${id}`;
  }
}
