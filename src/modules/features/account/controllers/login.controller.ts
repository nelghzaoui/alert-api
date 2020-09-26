import { Body, Controller, Param, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { LoginDTO, LoginResponseDTO } from '../models/dtos/login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post(':id')
  async login(
    @Param('id') id: string,
    @Body('login') login: LoginDTO
  ): Promise<LoginResponseDTO> {
    const isConnected = await this.loginService.checkAccount(id, login);

    const response: LoginResponseDTO = {
      succes: isConnected,
      timeout: isConnected ? 1000 : -1,
    };

    return response;
  }
}
