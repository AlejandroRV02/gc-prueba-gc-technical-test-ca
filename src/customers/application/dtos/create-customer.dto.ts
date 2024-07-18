import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    lastname: string

    @IsNotEmpty()
    @IsDate()
    birthday: Date

}