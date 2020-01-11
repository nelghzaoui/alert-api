import { Controller, Get, Post } from '@nestjs/common';

@Controller('server')
export class ServerController {
  @Post()
  static addServer(): any {}
}
