import { Module } from '@nestjs/common';
import UserModule from '../user/user.module';
import { SignupResolver } from './signup.resolver';
import { SignupService } from './signup.service';

@Module({
  imports: [UserModule],
  providers: [SignupResolver, SignupService],
})
export default class SignupModule {}
