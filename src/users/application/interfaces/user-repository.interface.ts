import { UserModel } from "src/users/domain/model/user.model";
import { CreateUserDto } from "../dtos/create-user.dto";

export interface IUserRepository {
    createUser(createUserDto: CreateUserDto): Promise<UserModel>;
    //findUserByEmail(email: string): Promise<User | null>;
}