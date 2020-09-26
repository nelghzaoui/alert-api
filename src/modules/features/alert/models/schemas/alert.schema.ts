import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from '../interfaces/address.interface';

@Schema()
export class Alert extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  address: Address;

  @Prop({ required: true })
  isAcknowledge: boolean;

  @Prop({ required: true })
  isEnd: boolean;

  @Prop({ required: true })
  creationDate: Date;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
