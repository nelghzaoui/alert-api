import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressType {
  @Field()
  readonly city: string;
  @Field(() => Int)
  readonly postCode: number;
  @Field()
  readonly street: string;
  @Field(() => Int)
  readonly streetNumber: number;
}
