import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address extends Document {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  postCode: number;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  streetNumber: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
