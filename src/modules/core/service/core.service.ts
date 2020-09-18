import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CoreService {
  constructor() {}

  // public async _delete(model: Model<any, {}>, id: string): Promise<void> {
  //   const result = await model.deleteOne({ _id: id }).exec();

  //   if (result.n === 0) {
  //     throw new NotFoundException('Could not find server.');
  //   }
  // }

  protected async find<T>(model: Model<any, {}>, id: string): Promise<T> {
    let _model: any;
    try {
      _model = await model.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find account.');
    }

    if (!_model) {
      throw new NotFoundException('Could not find account.');
    }

    return _model;
  }
}
