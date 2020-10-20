import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CoreService } from '@core/service/core.service';
import { Server, ServerInput, ServerType } from '@server/models';

@Injectable()
export class ServerService extends CoreService {
  constructor(
    @InjectModel(Server.name) private readonly serverModel: Model<Server>
  ) {
    super();
  }

  async create(server: ServerInput): Promise<ServerType> {
    const result = await new this.serverModel(server).save();

    return result;
  }

  async readAll(): Promise<ServerType[]> {
    return await this.serverModel.find().exec();
  }

  async read(id: string): Promise<ServerType> {
    return await this.serverModel.findOne({ _id: id });
  }

  async update(id: string, server: ServerInput): Promise<ServerType> {
    return await this.serverModel.findByIdAndUpdate(id, server, { new: true });
  }

  async delete(id: string): Promise<ServerType> {
    return await this.serverModel.findByIdAndRemove(id);
  }
}
