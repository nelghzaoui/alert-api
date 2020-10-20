import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class ServerType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field()
  readonly url: string;
  @Field(() => Int)
  readonly port: number;
}
