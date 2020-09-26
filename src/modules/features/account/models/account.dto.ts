import { LoginDTO } from './login.dto';

export class AccountDTO implements LoginDTO {
  constructor(
    public name: string,
    public username: string,
    public email: string,
    public password: string,
    public creationDate: Date
  ) {}
}

export interface CreateAccountDTO {
  id: string;
}
