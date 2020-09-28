import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/* Custom Module */
import { CoreModule } from '@core/core.module';
import { AlertModule } from '@alert/alert.module';
import { AccountModule } from '@account/account.module';
import { ServerModule } from '@server/server.module';

const databaseUrl =
  'mongodb+srv://nasreddine:G5iECWApFc7JQmHF@cluster0.yejys.gcp.mongodb.net/alert?retryWrites=true&w=majority';
@Module({
  imports: [
    CoreModule,
    AlertModule,
    AccountModule,
    ServerModule,
    MongooseModule.forRoot(databaseUrl),
  ],
})
export class AppModule {}
