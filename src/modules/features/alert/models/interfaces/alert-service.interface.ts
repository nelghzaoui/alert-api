import { AlertDTO } from '../dtos/alert.dto';
import { Alert } from '../schemas/alert.schema';

export interface AlertServiceInterface {
  create(alert: AlertDTO): Promise<Alert>;
  readAll(): Promise<Alert[]>;
  read(id: string): Promise<Alert>;
  update(id: string, alert: AlertDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
