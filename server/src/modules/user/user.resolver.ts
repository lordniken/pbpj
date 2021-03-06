import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserRegistrationDto } from 'src/dto';
import { User } from 'src/models';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(new AuthGuard())
  async me(@Context('user') { id }: User): Promise<User> {
    return this.userService.userInfo(id);
  }

  @Mutation(() => Boolean)
  async createUser(@Args('data') data: UserRegistrationDto): Promise<boolean> {
    await this.userService.createUser(data);

    return true;
  }
}
