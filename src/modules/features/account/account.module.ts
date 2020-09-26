import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountController, LoginController } from './controllers';
import { Account, AccountSchema } from './schemas/account.schema';
import { AccountService, LoginService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])
  ],
  controllers: [AccountController, LoginController],
  providers: [AccountService, LoginService]
})
export class AccountModule {}
