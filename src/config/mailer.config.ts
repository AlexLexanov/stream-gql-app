import { Injectable } from "@nestjs/common";
import { MailerOptions, MailerOptionsFactory } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { join } from 'path';


@Injectable()
export class MailerConfigService implements MailerOptionsFactory {
  createMailerOptions(): Promise<MailerOptions> | MailerOptions {
    console.log(join(__dirname, '../templates/'));
      return {
        transport: {
          service: 'Gmail',
          host: process.env.MAil_HOST,
          port: Number(process.env.MAIL_PORT),
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
          },
        },
        defaults: {
          from: process.env.MAIL_EMAIL,
        },
        template: {
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }
  }
}
