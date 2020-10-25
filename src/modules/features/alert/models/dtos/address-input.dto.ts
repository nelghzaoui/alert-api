import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field()
  readonly city: string;
  @Field(() => Int)
  readonly postCode: number;
  @Field()
  readonly street: string;
  @Field(() => Int)
  readonly streetNumber: number;
}
