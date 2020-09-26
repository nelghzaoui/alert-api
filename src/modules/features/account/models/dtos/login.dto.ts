export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  succes: boolean;
  timeout: number;
}
