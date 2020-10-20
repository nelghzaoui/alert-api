import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountType {
  @Field(() => ID)
  readonly id?: string;
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
