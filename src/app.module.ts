import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { CustomerModule } from './customers/customer.module';

@Module({
  imports: [
    UserModule,
    CustomerModule,
  ],
})
export class AppModule {}
