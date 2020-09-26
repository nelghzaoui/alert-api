export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginReponseDTO {
  succes: boolean;
  timeout: number;
}
