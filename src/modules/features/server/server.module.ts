import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerController } from './controller/server.controller';
import { ServerService } from './service/server.service';
import { ServerSchema } from './model/server.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Server', schema: ServerSchema }])
  ],
  controllers: [ServerController],
  providers: [ServerService]
})
export class ServerModule {}
