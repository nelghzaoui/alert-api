import {
  Injectable,
  NotAcceptableException,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoreService } from '@core/service/core.service';
import { Account, AccountDTO } from '../model';

@Injectable()
export class AccountService extends CoreService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>
  ) {
    super();
  }

  public async create(account: Account): Promise<string> {
    const createdAccount = new this.accountModel({
      name: account.name,
      username: account.username,
      email: account.email,
      password: account.password,
      creationDate: new Date()
    });

    const result = await createdAccount.save();

    return result.id;
  }

  public async readAll(): Promise<AccountDTO[]> {
    const accounts = await this.accountModel.find().exec();

    return accounts.map(
      account =>
        new AccountDTO(
          account.id,
          account.name,
          account.username,
          account.email,
          account.password,
          account.creationDate
        )
    );
  }

  async read(id: string): Promise<AccountDTO> {
    const account: Account = await super.find(this.accountModel, id);

    return new AccountDTO(
      account.id,
      account.name,
      account.username,
      account.email,
      account.password,
      account.creationDate
    );
  }

  async update(id: string, _account: Account): Promise<void> {
    const account: Account = await super.find(this.accountModel, id);

    if (!_account) {
      throw new NotAcceptableException();
    }

    if (_account.name) account.name = _account.name;
    if (_account.username) account.username = _account.username;
    if (_account.email) account.email = _account.email;
    if (_account.password) account.password = _account.password;

    account.save();
  }

  async delete(id: string): Promise<void> {
    const result = await this.accountModel.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      throw new NotFoundException('Could not find account.');
    }
  }
}
