import { Model } from 'mongoose';
import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CoreService } from '@core/service/core.service';
import { Alert } from '@alert/models/schemas/alert.schema';
import { AlertDTO } from '@alert/models/dtos/alert.dto';
import { AlertServiceInterface } from '@alert/models/interfaces/alert-service.interface';

@Injectable()
export class AlertService extends CoreService implements AlertServiceInterface {
  constructor(
    @InjectModel(Alert.name) private readonly alertModel: Model<Alert>
  ) {
    super();
  }

  public async create(alert: AlertDTO): Promise<Alert> {
    const result = await new this.alertModel(alert).save();

    return result;
  }

  public async readAll(): Promise<Alert[]> {
    const alerts = await this.alertModel.find().exec();

    return alerts;
  }

  public async read(id: string): Promise<Alert> {
    const alert: Alert = await super.find(this.alertModel, id);

    return alert;
  }

  public async update(id: string, params: AlertDTO): Promise<void> {
    const alert: Alert = await super.find(this.alertModel, id);

    if (!params) {
      throw new NotAcceptableException();
    }

    if (params.name) alert.name = params.name;
    if (params.description) alert.description = params.description;
    if (params.type) alert.type = params.type;
    if (params.address) alert.address = params.address;
    if (params.isAcknowledge) alert.isAcknowledge = params.isAcknowledge;
    if (params.isEnd) alert.isEnd = params.isEnd;

    alert.save();
  }

  public async delete(id: string): Promise<void> {
    const result = await this.alertModel.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      throw new NotFoundException('Could not find alert.');
    }
  }
}
