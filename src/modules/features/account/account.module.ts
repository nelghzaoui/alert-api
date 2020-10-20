import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Account, AccountSchema } from './models/schemas/account.schema';
import { AccountResolver } from './resolvers/account.resolver';
import { LoginResolver } from './resolvers/login.resolver';
import { AccountService, LoginService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [AccountResolver, AccountService, LoginResolver, LoginService],
})
export class AccountModule {}
