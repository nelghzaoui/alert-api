import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerModule } from './server/server.module';

const databaseUrl =
  'mongodb+srv://nasreddine:lGl97ueIbH6SXYPU@cluster0-dkg9q.gcp.mongodb.net/alert-db?retryWrites=true&w=majority';
@Module({
  imports: [ServerModule, MongooseModule.forRoot(databaseUrl)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
