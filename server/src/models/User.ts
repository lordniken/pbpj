import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

@ObjectType()
export class User {
  @Expose()
  @Field(() => ID)
  id: string;

  @Expose()
  @Field({ nullable: true })
  username: string;

  @Expose()
  @Field({ nullable: true })
  role: string;
}
