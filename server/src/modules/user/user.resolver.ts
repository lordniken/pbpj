import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserAuthDto, UserRegistrationDto } from 'src/dto';
import { User } from 'src/models';
import { UserService } from './user.service';
import { AuthGuard } from './user.guard';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(new AuthGuard())
  async me(@Context('user') { id }: User): Promise<User> {
    return this.userService.userInfo(id);
  }

  @Query(() => String)
  async auth(@Args('data') data: UserAuthDto): Promise<any> {
    const user = await this.userService.auth(data);

    return this.userService.createToken(user);
  }

  @Mutation(() => Boolean)
  async createUser(@Args('data') data: UserRegistrationDto): Promise<boolean> {
    await this.userService.createUser(data);

    return true;
  }
}
