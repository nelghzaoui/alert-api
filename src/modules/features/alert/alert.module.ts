import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlertController } from './controllers/alert.controller';
import { AlertService } from './services/alert.service';
import { Alert, AlertSchema } from './models/schemas/alert.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alert.name, schema: AlertSchema }]),
  ],
  controllers: [AlertController],
  providers: [AlertService],
})
export class AlertModule {}
