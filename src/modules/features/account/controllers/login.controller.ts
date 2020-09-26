import { Body, Controller, Param, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { LoginDTO, LoginReponseDTO } from '../models/login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post(':id')
  async login(
    @Param('id') id: string,
    @Body('credentials') credentials: LoginDTO
  ): Promise<LoginReponseDTO> {
    const result = await this.loginService.checkAccount(id, credentials);

    return result;
  }
}
