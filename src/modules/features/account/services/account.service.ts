import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CoreService } from '@core/service/core.service';
import { Account, AccountInput, AccountType } from '@account/models';

@Injectable()
export class AccountService extends CoreService {
  constructor(
    @InjectModel(Account.name) private readonly accountModel: Model<Account>
  ) {
    super();
  }

  public async create(account: AccountInput): Promise<AccountType> {
    const result = await new this.accountModel(account).save();

    return result;
  }

  public async readAll(): Promise<AccountType[]> {
    return await this.accountModel.find().exec();
  }

  public async read(id: string): Promise<AccountType> {
    return await this.accountModel.findOne({ _id: id });
  }

  public async update(id: string, account: AccountInput): Promise<AccountType> {
    return await this.accountModel.findByIdAndUpdate(id, account, {
      new: true,
    });
  }

  public async delete(id: string): Promise<AccountType> {
    return await this.accountModel.findByIdAndRemove(id);
  }
}
