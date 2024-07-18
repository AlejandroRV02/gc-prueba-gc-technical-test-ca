import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICustomerRepository } from '../../application/interfaces/customer-repository.interface';
import { Customer } from 'src/customers/domain/customer.entity';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async updateCustomer(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }
}
