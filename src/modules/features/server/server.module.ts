import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerController } from './controllers/server.controller';
import { Server, ServerSchema } from './models/schemas/server.schema';
import { ServerService } from './services/server.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Server.name, schema: ServerSchema }]),
  ],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
