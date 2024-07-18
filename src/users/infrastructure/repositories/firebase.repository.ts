// src/users/firebase.repository.ts

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { CreateUserDto } from 'src/users/application/dtos/create-user.dto';
import { IUserRepository } from 'src/users/application/interfaces/user-repository.interface';
import { UserMapper } from 'src/users/application/mappers/user.mapper';
import { UserModel } from 'src/users/domain/model/user.model';
import { User } from 'src/users/infrastructure/entity/user.entity';

@Injectable()
export class FirebaseUserRepository implements IUserRepository {
  private firestore = admin.firestore().collection('users');

  async createUser(createUserDto: CreateUserDto): Promise<UserModel> {
    const user = await this.firestore.add(createUserDto);
    return UserMapper.mapEntityToModel<typeof user, UserModel>(user);
  }

  async getUserById(id: string): Promise<User | null> {
    const userSnapshot = await this.firestore.doc(id).get();
    if (userSnapshot.exists) {
      return { id: userSnapshot.id, ...userSnapshot.data() } as User;
    }
    return null;
  }

  async updateUser(user: User): Promise<User> {
    const userRef = this.firestore.doc(user.id);
    await userRef.update({...user});
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await this.firestore.doc(id).delete();
  }

  async getAllUsers(): Promise<User[]> {
    const snapshot = await this.firestore.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User));
  }
}
