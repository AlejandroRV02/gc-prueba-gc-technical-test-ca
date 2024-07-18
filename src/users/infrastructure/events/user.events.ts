import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { User } from 'src/users/infrastructure/entity/user.entity';

@Injectable()
export class UserEvents {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emitUserCreatedEvent(user: User) {
    this.eventEmitter.emit('user.created', user);
  }
}
