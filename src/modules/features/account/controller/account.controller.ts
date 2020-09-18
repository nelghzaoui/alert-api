import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { AccountService } from '../service/account.service';
import { Account, AccountDTO } from '../model';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('')
  async add(@Body('account') account: Account): Promise<{ id: string }> {
    const generatedId = await this.accountService.create(account);

    return { id: generatedId };
  }

  @Get()
  async getAll(): Promise<AccountDTO[]> {
    return await this.accountService.readAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<AccountDTO> {
    return await this.accountService.read(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('account') account: Account
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
