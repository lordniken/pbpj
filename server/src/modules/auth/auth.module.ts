import { Module } from '@nestjs/common';
import UserModule from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthResolver, AuthService],
  exports: [AuthService],
})
export default class AuthModule {}
