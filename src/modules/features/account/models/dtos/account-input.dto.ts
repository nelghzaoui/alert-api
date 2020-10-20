import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AccountInput {
  @Field()
  readonly name: string;
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
  @Field(() => Date)
  readonly creationDate: Date;
}
