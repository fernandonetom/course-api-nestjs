import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findAll() {
    return this.userRepository.find({ select: ['id', 'email'] });
  }

  async create(data: CreateUserDto) {
    const user = this.userRepository.create(data);

    return this.userRepository.save(user);
  }

  findById(id: string) {
    return this.userRepository.findOne(Number(id));
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.findById(id);
    this.userRepository.merge(user, data);

    return this.userRepository.save(user);
  }

  async destroy(id: string) {
    const user = await this.findById(id);

    return this.userRepository.remove(user);
  }
}
