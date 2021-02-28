import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApolloError } from 'apollo-server-express';
import { UserEntity } from 'src/entities';
import { UserDto } from 'src/dto';
import { isCorrectUsername } from 'src/utils/validations';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserDto): Promise<void> {
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
