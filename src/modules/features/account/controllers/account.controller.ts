import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { AccountDTO, CreateAccountDTO } from '@account/models/account.dto';
import { AccountService } from '@account/services/account.service';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async add(@Body('account') params: AccountDTO): Promise<CreateAccountDTO> {
    const account = await this.accountService.create(params);

    const response: CreateAccountDTO = {
      id: account.id
    };

    return response;
  }

  @Get()
  async getAll(): Promise<AccountDTO[]> {
    const accounts = await this.accountService.readAll();
    const response: AccountDTO[] = [];

    accounts.map(account => {
      response.push(
        new AccountDTO(
          account.name,
          account.username,
          account.email,
          account.password,
          account.creationDate
        )
      );
    });

    return response;
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<AccountDTO> {
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
  async update(
    @Param('id') id: string,
    @Body('account') account: AccountDTO
  ): Promise<void> {
    await this.accountService.update(id, account);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.accountService.delete(id);
    return;
  }
}
