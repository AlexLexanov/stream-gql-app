import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfigService } from 'src/config/jwt.config';
import { UsersModel } from 'src/models/users.model';
import { UsersResolver } from 'src/resolvers/users.resolver';
import { JwtStrategy } from 'src/security/jwt.strategy';
import { EncryptionService } from 'src/services/encryption.service';
import { UsersService } from 'src/services/users.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    TypeOrmModule.forFeature([ UsersModel ]),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
  ],
  providers: [UsersResolver, UsersService, JwtStrategy, EncryptionService],
  exports: [UsersService],
})
export class UsersModule {}
