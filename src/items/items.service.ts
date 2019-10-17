import { Item } from './interfaces/item.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '32423432',
      name: 'Item one',
      description: 'Description of item one',
      qty: 20,
    },
    {
      id: 't43r3112',
      name: 'Item two',
      description: 'Description of item two',
      qty: 20,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
      return this.items.find(item => item.id === id);
  }
}
