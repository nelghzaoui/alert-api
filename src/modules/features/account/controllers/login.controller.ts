import { Body, Controller, Param, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { LoginDTO, LoginReponseDTO } from '../models/login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post(':id')
  async login(
    @Param('id') id: string,
    @Body('login') login: LoginDTO
  ): Promise<LoginReponseDTO> {
    const isConnected = await this.loginService.checkAccount(id, login);

    const response: LoginReponseDTO = {
      succes: isConnected,
      timeout: isConnected ? 1000 : -1,
    };

    return response;
  }
}
