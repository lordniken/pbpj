import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/models';
import { UserAuthDto, UserRegistrationDto } from 'src/dto';
import { UserService } from './user.service';
import { ApolloError } from 'apollo-server-express';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async auth(@Args('data') data: UserAuthDto): Promise<any> {
    const user = await this.userService.auth(data);
    if (!user) {
      throw new ApolloError('AUTH_FAILED');
    }

    return this.userService.createToken(user);
  }

  @Mutation(() => Boolean)
  async createUser(@Args('data') data: UserRegistrationDto): Promise<boolean> {
    await this.userService.createUser(data);

    return true;
  }
}
