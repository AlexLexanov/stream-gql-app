import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { join } from "path";


@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async emailVerification(user, token) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Testing Nest MailerModule ✔',
      text: 'welcome',
      template: join(__dirname, '../templates/verification'),
      context: {
        title: 'Подтверждение email',
        user: user.username,
        url: 'http://localhost:3000/auth/confirmed/' + token
      }
    })
  }

  async emailConfirmed(user) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Testing Nest MailerModule ✔',
      text: 'Hello',
      template: join(__dirname, '../templates/confirmed.ejs'),
      context: {
        title: 'Подтверждение email',
        user: user.username,
      }
    })
  }
}
