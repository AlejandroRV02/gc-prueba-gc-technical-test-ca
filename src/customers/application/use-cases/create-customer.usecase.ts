import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../interfaces/customer-repository.interface';
import { Customer } from 'src/customers/domain/customer.entity';

@Injectable()
export class UpdateCustomerUseCase {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(customer: Customer): Promise<Customer> {
    customer.age = this.calculateAge(customer.birthday);
    return this.customerRepository.updateCustomer(customer);
  }

  private calculateAge(dateOfBirth: Date): number {
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
