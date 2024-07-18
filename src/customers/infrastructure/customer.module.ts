import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../domain/customer.entity';
import { CustomerRepository } from './repositories/customer.repository';
import { CreateCustomerUseCase } from './application/use-cases/create-customer.usecase';
import { CustomerController } from '../presentation/controllers/customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [
    CustomerRepository,
    {
      provide: 'ICustomerRepository',
      useClass: CustomerRepository,
    },
    CreateCustomerUseCase,
  ],
  exports: ['ICustomerRepository'],
})
export class CustomerModule {}