import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersModel } from 'src/models/users.model';
import { Repository } from 'typeorm';
import { EncryptionService } from './encryption.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly userRepository: Repository<UsersModel>,
    private readonly crypto: EncryptionService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailerService
  ) {}

  async findUser(email) {
    const user = await this.userRepository.findOne({ email });
    if (!Boolean(user)) throw new UnauthorizedException(`Пользователь не найден`);
    return user
  }

  async create(email, password) {
    password = await this.crypto.hash(password);
    const user = await this.userRepository.save({ email, password });
    const token = await this.setToken(user)
    return { ...user, token }
  }

  async login(email, password) {
      const user = await this.findUser(email)
      await this.crypto.compare(password, user.password)
      const token = await this.setToken(user)
      return { ...user, token }
  }

  async setToken({ email, password }) {
    return await this.jwtService.signAsync({ email, password })
  }
}
