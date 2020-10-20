import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Alert, AlertSchema } from './models/schemas/alert.schema';
import { AlertResolver } from './resolvers/alert.resolver';
import { AlertService } from './services/alert.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alert.name, schema: AlertSchema }]),
  ],
  providers: [AlertResolver, AlertService],
})
export class AlertModule {}
