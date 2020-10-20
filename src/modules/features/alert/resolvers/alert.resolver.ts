import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AlertService } from '@alert/services/alert.service';
import { AlertInput, AlertType } from '@alert/models';

@Resolver()
export class AlertResolver {
  constructor(private readonly alertService: AlertService) {}

  @Mutation(() => AlertType)
  async addAlert(@Args('input') input: AlertInput): Promise<AlertInput> {
    return this.alertService.create(input);
  }

  @Query(() => [AlertType], { name: 'alerts' })
  async getServers(): Promise<AlertType[]> {
    return this.alertService.readAll();
  }

  @Query(() => AlertType, { name: 'alert' })
  async getServer(@Args('id') id: string): Promise<AlertType> {
    return this.alertService.read(id);
  }

  @Mutation(() => AlertType)
  async updateServer(
    @Args('id') id: string,
    @Args('input') input: AlertInput
  ): Promise<AlertInput> {
    return this.alertService.update(id, input);
  }

  @Mutation(() => AlertType)
  async deleteServer(@Args('id') id: string): Promise<AlertInput> {
    return this.alertService.delete(id);
  }
}
