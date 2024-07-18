import { Module } from '@nestjs/common';
import { CustomerRepository } from './infrastructure/repositories/customer.repository';
import { CustomerController } from './presentation/controllers/customer.controller';

@Module({
  controllers: [CustomerController],
  providers: [
    // use cases,
    {
      provide: 'ICustomerRepository',
      useClass: CustomerRepository,
    },
  ],
  exports: [],
})
export class CustomerModule {}
