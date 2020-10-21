import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { AccountModule } from '@account/account.module';
import { AlertModule } from '@alert/alert.module';
import { CoreModule } from '@core/core.module';
import { ServerModule } from '@server/server.module';

const databaseUrl =
  'mongodb+srv://nasreddine:G5iECWApFc7JQmHF@cluster0.yejys.gcp.mongodb.net/alert?retryWrites=true&w=majority';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(databaseUrl),
    AccountModule,
    AlertModule,
    CoreModule,
    ServerModule,
  ],
})
export class AppModule {}
