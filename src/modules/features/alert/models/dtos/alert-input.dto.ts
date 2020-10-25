import { InputType, Field } from '@nestjs/graphql';
import { AddressInput } from './address-input.dto';

@InputType()
export class AlertInput {
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly type: string;
  @Field(() => AddressInput)
  readonly address: AddressInput;
  @Field()
  readonly isAcknowledge: boolean;
  @Field()
  readonly isEnd: boolean;
  @Field()
  readonly creationDate: Date;
}
