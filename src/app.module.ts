import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/* Custom Module */
import { AccountModule } from '@account/account.module';
import { AlertModule } from '@alert/alert.module';
import { CoreModule } from '@core/core.module';
import { ServerModule } from '@server/server.module';
import { GraphQLModule } from '@nestjs/graphql';

const databaseUrl =
  'mongodb+srv://nasreddine:G5iECWApFc7JQmHF@cluster0.yejys.gcp.mongodb.net/alert?retryWrites=true&w=majority';
@Module({
  imports: [
    AccountModule,
    AlertModule,
    CoreModule,
    ServerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(databaseUrl),
  ],
})
export class AppModule {}
