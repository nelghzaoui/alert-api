import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { ServerInput, ServerType } from '@server/models';
import { ServerService } from '@server/services/server.service';

@Resolver()
export class ServerResolver {
  constructor(private readonly serverService: ServerService) {}

  @Mutation(() => ServerType)
  async addServer(@Args('input') input: ServerInput): Promise<ServerInput> {
    return this.serverService.create(input);
  }

  @Query(() => [ServerType])
  async getServers(): Promise<ServerType[]> {
    return this.serverService.readAll();
  }

  @Query(() => ServerType)
  async getServer(@Args('id') id: string): Promise<ServerType> {
    return this.serverService.read(id);
  }

  @Mutation(() => ServerType)
  async updateServer(
    @Args('id') id: string,
    @Args('input') input: ServerInput
  ): Promise<ServerInput> {
    return this.serverService.update(id, input);
  }

  @Mutation(() => ServerType)
  async deleteServer(@Args('id') id: string): Promise<ServerInput> {
    return this.serverService.delete(id);
  }
}
