import * as mongoose from 'mongoose';

export const ServerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  port: { type: Number, required: true }
});

export interface Server extends mongoose.Document {
  id: string;
  name: string;
  url: string;
  port: number;
}
