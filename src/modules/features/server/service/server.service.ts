import {
  Injectable,
  NotAcceptableException,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Server } from '../model/server.model';

@Injectable()
export class ServerService {
  constructor(
    @InjectModel('Server') private readonly serverModel: Model<Server>
  ) {}

  async create(server: Server): Promise<string> {
    const createdServer = new this.serverModel({
      name: server.name,
      url: server.url,
      port: server.port
    });

    const result = await createdServer.save();

    return result.id;
  }

  async readAll() {
    const servers = await this.serverModel.find().exec();

    return servers.map(s => ({
      id: s.id,
      name: s.name,
      url: s.url,
      port: s.port
    }));
  }

  async read(id: string) {
    const server = await this.find(id);

    return {
      id: server.id,
      name: server.name,
      url: server.url,
      port: server.port
    };
  }

  async update(id: string, newServer: Server): Promise<void> {
    const updatedServer = await this.find(id);

    if (!newServer) {
      throw new NotAcceptableException();
    }

    if (newServer.name) updatedServer.name = newServer.name;
    if (newServer.url) updatedServer.url = newServer.url;
    if (newServer.port) updatedServer.port = newServer.port;

    updatedServer.save();
  }

  async delete(id: string): Promise<void> {
    const result = await this.serverModel.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      throw new NotFoundException('Could not find server.');
    }
  }

  private async find(id: string): Promise<Server> {
    let server: Server;
    try {
      server = await this.serverModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find server.');
    }

    if (!server) {
      throw new NotFoundException('Could not find server.');
    }

    return server;
  }
}
