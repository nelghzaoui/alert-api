import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CoreService } from '@core/service/core.service';
import { LoginDTO, LoginReponseDTO } from '@account/models/login.dto';
import { Account } from '@account/schemas/account.schema';

@Injectable()
export class LoginService extends CoreService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>
  ) {
    super();
  }

  public async checkAccount(id: string, login: LoginDTO): Promise<boolean> {
    const user: Account = await super.find(this.accountModel, id);

    if (!user) {
      throw new NotFoundException('Could not find account.');
    }

    if (login.email === user.email && login.password === user.email) {
      return true;
    }

    return false;
  }
}
