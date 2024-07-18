import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { UserController } from './presentation/controllers/user.controller';
import { FirebaseUserRepository } from './infrastructure/repositories/firebase.repository';

@Module({
  controllers: [UserController],
  providers: [
    // use cases,
    {
      provide: 'IUserRepository',
      useClass: FirebaseUserRepository,
    },
    CreateUserUseCase,
  ],
})
export class UserModule {}
