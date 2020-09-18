import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  //   birthdate: { type: Date, required: true},
  //   number: { type: number, required: true},
  creationDate: { type: Date, required: true }
});

export interface Account extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  creationDate: Date;
}
