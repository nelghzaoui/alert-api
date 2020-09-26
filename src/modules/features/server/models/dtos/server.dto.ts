export class ServerDTO {
  constructor(public name: string, public url: string, public port: number) {}
}

export interface CreateServerDTO {
  id: string;
}
