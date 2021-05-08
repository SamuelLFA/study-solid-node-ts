import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { settings } from '../../config/settings'
import { IMailProvider, IMessage } from '../IEmailProvider'

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: settings.mailtrapHost,
            port: settings.mailtrapPort,
            auth: {
                user: settings.mailtrapAuthUser,
                pass: settings.mailtrapAuthPass
            }
        })
    }

    async sendEmail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.to.name,
                address: message.to.email
            },
            subject: message.subject,
            html: message.body
        })
    }
 }