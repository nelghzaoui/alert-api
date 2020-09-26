import { Model } from 'mongoose';
import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CoreService } from '@core/service/core.service';
import { Server } from '@server/models/schemas/server.schema';
import { ServerDTO } from '@server/models/dtos/server.dto';

@Injectable()
export class ServerService extends CoreService {
  constructor(
    @InjectModel(Server.name) private readonly serverModel: Model<Server>
  ) {
    super();
  }

  public async create(server: ServerDTO): Promise<Server> {
    const result = await new this.serverModel(server).save();

    return result;
  }

  public async readAll(): Promise<Server[]> {
    const servers = await this.serverModel.find().exec();

    return servers;
  }

  public async read(id: string): Promise<Server> {
    const server: Server = await super.find(this.serverModel, id);

    return server;
  }

  public async update(id: string, params: ServerDTO): Promise<void> {
    const server: Server = await super.find(this.serverModel, id);

    if (!params) {
      throw new NotAcceptableException();
    }

    if (params.name) server.name = params.name;
    if (params.url) server.url = params.url;
    if (params.port) server.port = params.port;

    server.save();
  }

  public async delete(id: string): Promise<void> {
    const result = await this.serverModel.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      throw new NotFoundException('Could not find server.');
    }
  }
}
