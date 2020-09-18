import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountController } from './controller/account.controller';
import { AccountSchema } from './model/account.model';
import { AccountService } from './service/account.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }])
  ],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
