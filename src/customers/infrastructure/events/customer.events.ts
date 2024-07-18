import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { Customer } from 'src/customers/domain/customer.entity';

@Injectable()
export class CustomerEvents {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emitCustomerCreatedEvent(customer: Customer) {
    this.eventEmitter.emit('customer.created', customer);
  }

  emitCustomerUpdatedEvent(customer: Customer) {
    this.eventEmitter.emit('customer.updated', customer);
  }
}
