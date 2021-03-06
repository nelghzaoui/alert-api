import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CoreService } from '@core/service/core.service';
import { Alert, AlertInput, AlertType } from '@alert/models';

@Injectable()
export class AlertService extends CoreService {
  constructor(
    @InjectModel(Alert.name) private readonly alertModel: Model<Alert>
  ) {
    super();
  }

  async create(alert: AlertInput): Promise<AlertType> {
    const result = await new this.alertModel(alert).save();

    return result;
  }

  async readAll(): Promise<AlertType[]> {
    return await this.alertModel.find().exec();
  }

  async read(id: string): Promise<AlertType> {
    return await this.alertModel.findOne({ _id: id });
  }

  async update(id: string, alert: AlertInput): Promise<AlertType> {
    return await this.alertModel.findByIdAndUpdate(id, alert, { new: true });
  }

  async delete(id: string): Promise<AlertType> {
    return await this.alertModel.findByIdAndRemove(id);
  }
}
