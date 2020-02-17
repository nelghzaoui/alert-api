import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerController } from './server.controller';
import { ServerService } from './service.service';
import { ServerSchema } from './server.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Server', schema: ServerSchema }])
  ],
  controllers: [ServerController],
  providers: [ServerService]
})
export class ServerModule {}
