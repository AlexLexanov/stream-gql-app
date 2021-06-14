import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

// ================
import { TypeOrmConfigService } from './config/database.config';
import { MailerConfigService } from './config/mailer.config';

// ================
import { CategoriesModule } from './modules/categories.module';
import { UsersModule } from './modules/users.module';

// ================
import { MailService } from './services/mail.service';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    GraphQLModule.forRoot({ installSubscriptionHandlers: true, autoSchemaFile: 'schema.gql' }),
    MailerModule.forRootAsync({ useClass: MailerConfigService }),
  ],
  providers: [ MailService ],
  exports: [ MailService ],
})
export class AppModule {}
