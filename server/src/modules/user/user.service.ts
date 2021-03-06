import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApolloError } from 'apollo-server-express';
import { UserEntity } from 'src/entities';
import { User } from 'src/models';
import { UserAuthDto, UserRegistrationDto } from 'src/dto';
import { isCorrectUsername } from 'src/utils/validations';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async auth({ email, passwordHash }: UserAuthDto): Promise<User | undefined> {
    return this.usersRepository.findOne({ email, passwordHash });
  }

  async createToken({ id }: User): Promise<string> {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }

  async createUser(data: UserRegistrationDto): Promise<void> {
    const userExists = await this.usersRepository.findOne({
      email: data.email,
    });

    if (userExists) throw new ApolloError('EMAIL_ALREADY_EXISTS');
    if (!isCorrectUsername(data.username))
      throw new ApolloError('USERNAME_INCORRECT');

    const user = await this.usersRepository.create(data);
    await this.usersRepository.save(user);
  }
}
