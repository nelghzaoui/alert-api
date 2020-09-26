import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountDTO } from '@account/models/dtos/account.dto';
import { AccountService } from '@account/services/account.service';
import { CreateDTO } from '@core/models/dtos/create.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  public async add(@Body('account') params: AccountDTO): Promise<CreateDTO> {
    const account = await this.accountService.create(params);

    const response: CreateDTO = {
      id: account.id,
    };

    return response;
  }

  @Get()
  public async getAll(): Promise<AccountDTO[]> {
    const accounts = await this.accountService.readAll();
    const response: AccountDTO[] = [];

    accounts.map(a =>
      response.push(
        new AccountDTO(a.name, a.username, a.email, a.password, a.creationDate)
      )
    );

    return response;
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<AccountDTO> {
    const account = await this.accountService.read(id);

    const response = new AccountDTO(
      account.name,
      account.username,
      account.email,
      account.password,
      account.creationDate
    );

    return response;
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body('account') account: AccountDTO
  ): Promise<void> {
    await this.accountService.update(id, account);
    return;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    await this.accountService.delete(id);
    return;
  }
}
