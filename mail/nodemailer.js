import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

//const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;

let testAccount = await nodemailer.createTestAccount();
const testHost = 'smtp.ethereal.email';

let transporter = nodemailer.createTransport({
  host: testHost,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

const sendEmail = async (content) => {
  try {
    let info = await transporter.sendMail({
      from: `${content.email}`,
      to: 'jorne@jsjj.be',
      subject: 'Message from webform',
      html: `
      <h1>Hello ${content.name}</h1>
      <p>${content.message}</p>
      <p>email: ${content.email}</p>
      <hr/>
      `,
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error(error);
  }
};

export { sendEmail };
