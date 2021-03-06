import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/models';
import { UserAuthDto } from 'src/dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async checkAuth({
    email,
    passwordHash,
  }: UserAuthDto): Promise<User | undefined> {
    const user = this.userService.findUser({ email, passwordHash });

    if (!user) {
      throw new HttpException('AUTH_FAILED', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async createToken({ id }: User): Promise<string> {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }
}
