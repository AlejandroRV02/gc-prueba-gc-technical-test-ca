import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/use-cases/create-user.usecase';
import { User } from 'src/users/infrastructure/entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() userDto: any): Promise<User> {
    const user = new User(userDto.id, userDto.name, userDto.email);
    return this.createUserUseCase.execute(user);
  }
}