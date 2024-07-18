import { Controller, Post, Put, Body } from '@nestjs/common';
//import { CreateCustomerUseCase } from '../../application/use-cases/create-customer.usecase';
import { UpdateCustomerUseCase } from 'src/customers/application/use-cases/create-customer.usecase';
import { Customer } from 'src/customers/domain/customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly updateCustomerUseCase: UpdateCustomerUseCase,
  ) {}

  @Post()
  async createCustomer(@Body() customerDto: any): Promise<Customer> {
    const customer = new Customer(customerDto.id, customerDto.name, new Date(customerDto.dateOfBirth));
    return this.createCustomerUseCase.execute(customer);
  }

  @Put()
  async updateCustomer(@Body() customerDto: any): Promise<Customer> {
    const customer = new Customer(customerDto.id, customerDto.name, new Date(customerDto.dateOfBirth));
    return this.updateCustomerUseCase.execute(customer);
  }
}
