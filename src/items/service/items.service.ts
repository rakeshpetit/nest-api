import { Item } from '../interfaces/item.interface';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  // private readonly items: Item[] = [
  //   {
  //     id: '32423432',
  //     name: 'Item one',
  //     description: 'Description of item one',
  //     qty: 20,
  //   },
  //   {
  //     id: 't43r3112',
  //     name: 'Item two',
  //     description: 'Description of item two',
  //     qty: 20,
  //   },
  // ];

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async delete(id: string) {
    await this.itemModel.findByIdAndRemove(id);
    return;
  }
}
