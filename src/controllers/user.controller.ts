import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  @Get(':id')
  async findUserById(@Param('id') id: any): Promise<User> {
    return await this.userRepository.findOne(id);
  }
  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
  @Put(':id')
  async updateUser(@Param('id') id: any, @Body() user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOne(id);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}

// function constructor(arg0: any, Private: any, readonly: any, userRepository: any, arg4: { new(target: import("typeorm").EntityTarget<User>, manager: import("typeorm").EntityManager, queryRunner?: import("typeorm").QueryRunner): Repository<User>; prototype: Repository<any>; }) {
//     throw new Error('Function not implemented.');
// }

// function findAllUsers() {
//     throw new Error('Function not implemented.');
// }
