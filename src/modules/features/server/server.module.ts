import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Server, ServerSchema } from './models/schemas/server.schema';
import { ServerResolver } from './resolvers/server.resolver';
import { ServerService } from './services/server.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Server.name, schema: ServerSchema }]),
  ],
  providers: [ServerResolver, ServerService],
})
export class ServerModule {}
