import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/models';
import { UserDto } from 'src/dto/user';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Boolean)
  async test(@Args('data') data: string): Promise<boolean> {
    console.log(data);

    return true;
  }

  @Mutation(() => Boolean)
  async createUser(@Args('data') data: UserDto): Promise<boolean> {
    await this.userService.createUser(data);

    return true;
  }
}
