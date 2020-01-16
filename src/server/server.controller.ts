import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete
} from '@nestjs/common';
import { Server } from './server.model';
import { ServerService } from './service.service';

@Controller('servers')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Post()
  add(@Body('server') server: Server): { id: string } {
    const id = this.serverService.create(server);

    return { id: id };
  }

  @Get()
  getAll(): Server[] {
    return this.serverService.readAll();
  }

  @Get(':name')
  get(@Param('name') name: string): Server {
    return this.serverService.read(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body('server') server: Server): void {
    this.serverService.update(name, server);
    return;
  }

  @Delete(':name')
  remove(@Param('name') name: string): void {
    this.serverService.delete(name);
    return;
  }
}
