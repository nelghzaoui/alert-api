import { LoginDTO, LoginResponseDTO } from '@account/models/dtos/login.dto';
import { LoginService } from '@account/services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  // @Mutation()
  // async login(
  //   @Args('id') id: string,
  //   @Args('login') login: LoginDTO
  // ): Promise<LoginResponseDTO> {
  //   const isConnected = await this.loginService.checkAccount(id, login);

  //   const response: LoginResponseDTO = {
  //     succes: isConnected,
  //     timeout: isConnected ? 1000 : -1,
  //   };

  //   return response;
  // }
}
