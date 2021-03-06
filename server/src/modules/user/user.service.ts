import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import * as jwt from 'jsonwebtoken';
import { UserEntity } from 'src/entities';
import { User } from 'src/models';
import { UserAuthDto, UserRegistrationDto } from 'src/dto';
import { isCorrectUsername } from 'src/utils/validations';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async userInfo(id: string): Promise<User | undefined> {
    const { passwordHash, ...userInfo } = await this.usersRepository.findOne({
      id,
    });

    return userInfo;
  }

  async findUser({
    email,
    passwordHash,
  }: UserAuthDto): Promise<User | undefined> {
    return await this.usersRepository.findOne({ email, passwordHash });
  }

  async createUser(data: UserRegistrationDto): Promise<void> {
    const userExists = await this.usersRepository.findOne({
      email: data.email,
    });

    if (userExists)
      throw new HttpException('USER_ALREADY_EXISTS', HttpStatus.CONFLICT);
    if (!isCorrectUsername(data.username))
      throw new HttpException('USERNAME_INCORRECT', HttpStatus.CONFLICT);

    const user = await this.usersRepository.create(data);
    await this.usersRepository.save(user);
  }
}
