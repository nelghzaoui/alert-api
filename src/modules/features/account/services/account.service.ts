import { Model } from 'mongoose';
import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CoreService } from '@core/service/core.service';
import { Account } from '@account/models/schemas/account.schema';
import { AccountDTO } from '@account/models/dtos/account.dto';

@Injectable()
export class AccountService extends CoreService {
  constructor(
    @InjectModel(Account.name) private readonly accountModel: Model<Account>
  ) {
    super();
  }

  public async create(account: AccountDTO): Promise<Account> {
    const result = await new this.accountModel(account).save();

    return result;
  }

  public async readAll(): Promise<Account[]> {
    const accounts = await this.accountModel.find().exec();

    return accounts;
  }

  public async read(id: string): Promise<Account> {
    const account: Account = await super.find(this.accountModel, id);

    return account;
  }

  public async update(id: string, params: AccountDTO): Promise<void> {
    const account: Account = await super.find(this.accountModel, id);

    if (!params) {
      throw new NotAcceptableException();
    }

    if (params.name) account.name = params.name;
    if (params.username) account.username = params.username;
    if (params.email) account.email = params.email;
    if (params.password) account.password = params.password;

    account.save();
  }

  public async delete(id: string): Promise<void> {
    const result = await this.accountModel.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      throw new NotFoundException('Could not find account.');
    }
  }
}
