import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { Address } from '../interfaces/address.interface';

@ObjectType()
export class AlertType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly type: string;
  @Field(() => Address)
  readonly address: Address;
  @Field()
  readonly isAcknowledge: boolean;
  @Field()
  readonly isEnd: boolean;
  @Field(() => GraphQLISODateTime)
  readonly creationDate: Date;
}
