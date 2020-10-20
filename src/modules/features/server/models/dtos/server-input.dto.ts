import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ServerInput {
  @Field()
  readonly name: string;
  @Field()
  readonly url: string;
  @Field(() => Int)
  readonly port: number;
}
