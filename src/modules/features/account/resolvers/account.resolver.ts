import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { AccountInput, AccountType } from '@account/models';
import { AccountService } from '@account/services';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(() => AccountType)
  async addAccount(@Args('input') input: AccountInput): Promise<AccountInput> {
    return this.accountService.create(input);
  }

  @Query(() => [AccountType])
  async getAccounts(): Promise<AccountType[]> {
    return this.accountService.readAll();
  }

  @Query(() => AccountType)
  async getAccount(@Args('id') id: string): Promise<AccountType> {
    return this.accountService.read(id);
  }

  @Mutation(() => AccountType)
  async updateAccount(
    @Args('id') id: string,
    @Args('input') input: AccountInput
  ): Promise<AccountInput> {
    return this.accountService.update(id, input);
  }

  @Mutation(() => AccountType)
  async deleteAccount(@Args('id') id: string): Promise<AccountInput> {
    return this.accountService.delete(id);
  }
}
