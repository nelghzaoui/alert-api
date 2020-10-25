import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { AddressType } from './address-type.dto';

@ObjectType()
export class AlertType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly type: string;
  @Field(() => AddressType)
  readonly address: AddressType;
  @Field()
  readonly isAcknowledge: boolean;
  @Field()
  readonly isEnd: boolean;
  @Field(() => GraphQLISODateTime)
  readonly creationDate: Date;
}
