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

  public async checkAccount(
    id: string,
    credentials: LoginDTO
  ): Promise<LoginReponseDTO> {
    const user: Account = await super.find(this.accountModel, id);

    if (!user) {
      throw new NotFoundException('Could not find account.');
    }

    const response: LoginReponseDTO = {
      succes: false,
      timeout: -1
    };
    if (
      credentials.email === user.email &&
      credentials.password === user.email
    ) {
      response.succes = true;
      response.timeout = 1000;
    }

    return response;
  }
}
