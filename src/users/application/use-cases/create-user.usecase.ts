import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { randomBytes } from 'crypto';
import { UserModel } from 'src/users/domain/model/user.model';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserModel> {
    
    if(!createUserDto.password) {
      createUserDto.password = this.generateSecurePassword(15)
    }

    return this.userRepository.createUser(createUserDto);
  }

  private generateSecurePassword(length: number): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";

    const randomBytesBuffer = randomBytes(length);

    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = randomBytesBuffer[i] % charset.length;
      password += charset[randomIndex];
    }
  
    return password;
  }
}