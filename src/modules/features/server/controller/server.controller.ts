import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { Server } from '../model/server.model';
import { ServerService } from '../service/server.service';

@Controller('servers')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Post()
  async add(@Body('server') server: Server): Promise<{ id: string }> {
    const generatedId = await this.serverService.create(server);

    return { id: generatedId };
  }

  @Get()
  async getAll() {
    return await this.serverService.readAll();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.serverService.read(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('server') server: Server
  ): Promise<void> {
    await this.serverService.update(id, server);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.serverService.delete(id);
    return;
  }
}
