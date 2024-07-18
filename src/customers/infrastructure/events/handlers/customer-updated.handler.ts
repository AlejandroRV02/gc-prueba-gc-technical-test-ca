import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Customer } from 'src/customers/domain/customer.entity';

@Injectable()
export class CustomerUpdatedHandler {
  @OnEvent('customer.updated')
  handleCustomerUpdatedEvent(customer: Customer) {
    customer.age = this.calculateAge(customer.birthday);
    // Update Firestore
  }

  private calculateAge(dateOfBirth: Date): number {
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
