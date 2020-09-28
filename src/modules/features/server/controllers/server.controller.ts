import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDTO } from '@core/models/dtos/create.dto';
import { ServerDTO } from '@server/models/dtos/server.dto';
import { ServerService } from '@server/services/server.service';

@Controller('servers')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Post()
  public async add(@Body('server') params: ServerDTO): Promise<CreateDTO> {
    const server = await this.serverService.create(params);

    const response: CreateDTO = {
      id: server.id,
    };

    return response;
  }

  @Get()
  public async getAll(): Promise<ServerDTO[]> {
    const servers = await this.serverService.readAll();
    const response: ServerDTO[] = [];

    servers.map(s => response.push(new ServerDTO(s.name, s.url, s.port)));

    return response;
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<ServerDTO> {
    const server = await this.serverService.read(id);

    const response = new ServerDTO(server.name, server.url, server.port);

    return response;
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body('server') server: ServerDTO
  ): Promise<void> {
    await this.serverService.update(id, server);
    return;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    await this.serverService.delete(id);
    return;
  }
}