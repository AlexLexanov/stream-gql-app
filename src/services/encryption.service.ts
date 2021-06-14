import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class EncryptionService {
    private saltOrRounds = 10;

    async hash(password): Promise<string> {
        return hash(password, this.saltOrRounds)
    }

    async compare(plain: string, encrypted: string): Promise<any> {
            const validPass = await compare(plain, encrypted)                      
            if (validPass) return validPass
            else throw new UnauthorizedException('Не верный пароль')
    }
}
