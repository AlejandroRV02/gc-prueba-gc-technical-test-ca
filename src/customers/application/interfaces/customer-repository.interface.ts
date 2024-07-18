import { Customer } from "../../domain/customer.entity";

export interface ICustomerRepository {
    createCustomer(customer: Customer): Promise<Customer>;
    updateCustomer(customer: Customer): Promise<Customer>;
  }