import { Field, InputType } from '@nestjs/graphql';
import { UserRoleType } from './role';

@InputType()
export class UserRegistrationDto {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  passwordHash: string;

  @Field(() => UserRoleType)
  role: UserRoleType;
}
