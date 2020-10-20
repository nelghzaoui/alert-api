import { InputType, Field } from '@nestjs/graphql';
import { Address } from '../interfaces/address.interface';

@InputType()
export class AlertInput {
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
  @Field()
  readonly creationDate: Date;
}
