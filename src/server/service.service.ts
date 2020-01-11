import { Injectable } from '@nestjs/common';
import { Server } from './server.model';

@Injectable()
export class ServerService {
  servers: Array<Server>;
}
