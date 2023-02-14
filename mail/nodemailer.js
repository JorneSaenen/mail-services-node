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

const sendEmail = async (data) => {
  try {
    let info = await transporter.sendMail({
      from: `${data.email}`,
      to: 'to email',
      subject: data.subject,
      html: `
      <h1>Hello ${data.name}</h1>
      <p>${data.message}</p>
      <p>email: ${data.email}</p>
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
