import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CoreService } from '@core/service/core.service';
import { LoginDTO } from '@account/models/dtos/login.dto';
import { Account } from '@account/models/schemas/account.schema';

@Injectable()
export class LoginService extends CoreService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>
  ) {
    super();
  }

  public async checkAccount(id: string, login: LoginDTO): Promise<boolean> {
    const user = await this.accountModel.findOne({ _id: id });

    if (!user) {
      throw new NotFoundException('Could not find account.');
    }

    if (login.email === user.email && login.password === user.password) {
      return true;
    }

    return false;
  }
}
