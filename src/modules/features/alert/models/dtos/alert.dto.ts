import { Address } from '../interfaces/address.interface';

export class AlertDTO {
  constructor(
    public name: string,
    public description: string,
    public type: string,
    public address: Address,
    public isAcknowledge: boolean,
    public isEnd: boolean,
    public creationDate: Date
  ) {}
}
