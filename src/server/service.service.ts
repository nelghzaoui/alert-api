import {
  Injectable,
  NotAcceptableException,
  NotFoundException
} from '@nestjs/common';
import { Server } from './server.model';

@Injectable()
export class ServerService {
  private servers: Server[] = [];

  create(server: Server): string {
    const id = new Date().toString();
    this.servers.push(server);

    return id;
  }

  readAll(): Server[] {
    return [...this.servers];
  }

  read(name: string): Server {
    const server = this.find(name)[0];

    return { ...server };
  }

  update(name: string, newServer: Server): void {
    const index = this.find(name)[1];

    if (!newServer) {
      throw new NotAcceptableException();
    }

    this.servers[index] = newServer;
  }

  delete(name: string): void {
    const index = this.find(name)[1];
    this.servers.splice(index, 1);
  }

  private find(name: string): [Server, number] {
    const index = this.servers.findIndex(server => server.name === name);
    const server = this.servers[index];

    if (!server) {
      throw new NotFoundException('Could not find server.');
    }

    return [server, index];
  }
}
