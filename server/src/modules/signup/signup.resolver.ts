import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserRegistrationDto } from 'src/dto';
import { SignupService } from './signup.service';

@Resolver(() => Boolean)
export class SignupResolver {
  constructor(private readonly signupService: SignupService) {}

  @Mutation(() => Boolean)
  async createUser(@Args('data') data: UserRegistrationDto): Promise<boolean> {
    const user = await this.signupService.createUser(data);

    return !!user;
  }
}
