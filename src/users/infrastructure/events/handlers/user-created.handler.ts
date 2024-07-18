import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { User } from 'src/users/infrastructure/entity/user.entity';

@Injectable()
export class UserCreatedHandler {
  @OnEvent('user.created')
  handleUserCreatedEvent(user: User) {
    // Implement password generation logic and update Firestore
  }
}
