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
import { AlertDTO } from '@alert/models/dtos/alert.dto';
import { AlertService } from '@alert/services/alert.service';

@Controller('alerts')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  public async add(@Body('alert') params: AlertDTO): Promise<CreateDTO> {
    const alert = await this.alertService.create(params);

    const response: CreateDTO = {
      id: alert.id,
    };

    return response;
  }

  @Get()
  public async getAll(): Promise<AlertDTO[]> {
    const alerts = await this.alertService.readAll();
    const response: AlertDTO[] = [];

    alerts.map(alert =>
      response.push(
        new AlertDTO(
          alert.name,
          alert.description,
          alert.type,
          alert.address,
          alert.isAcknowledge,
          alert.isAcknowledge,
          alert.creationDate
        )
      )
    );

    return response;
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<AlertDTO> {
    const alert = await this.alertService.read(id);

    const response = new AlertDTO(
      alert.name,
      alert.description,
      alert.type,
      alert.address,
      alert.isAcknowledge,
      alert.isAcknowledge,
      alert.creationDate
    );

    return response;
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body('alert') alert: AlertDTO
  ): Promise<void> {
    await this.alertService.update(id, alert);
    return;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    await this.alertService.delete(id);
    return;
  }
}
