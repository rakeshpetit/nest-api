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
  @Get()
  findAll(): string {
    return 'Item';
  }
  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Item: ${param.id}`;
  //   }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item: ${id}`;
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
