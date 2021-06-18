import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { graphqlUploadExpress } from 'graphql-upload';

// ================
import { TypeOrmConfigService } from './config/database.config';
import { MailerConfigService } from './config/mailer.config';

// ================
import { SectionModule } from './modules/section.module';
import { UsersModule } from './modules/users.module';

// ================
import { MailService } from './services/mail.service';

@Module({
  imports: [
    UsersModule,
    SectionModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    GraphQLModule.forRoot({ 
      installSubscriptionHandlers: true,
      uploads: false,
      autoSchemaFile: 'schema.gql' 
    }),
    MailerModule.forRootAsync({ useClass: MailerConfigService }),
  ],
  providers: [ MailService ],
  exports: [ MailService ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}