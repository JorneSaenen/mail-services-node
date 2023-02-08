import dotenv from 'dotenv';
dotenv.config();
import sgMail from '@sendgrid/mail';

const sendGridEmail = async (data) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const msg = {
      from: 'from email',
      template_id: process.env.SENDGRID_TEMPLATE_ID,
      personalizations: [
        {
          to: [
            {
              email: data.email,
            },
            {
              email: '2th email',
            },
          ],
          dynamic_template_data: {
            ...data,
            date: new Date().toLocaleDateString('nl-BE'),
          },
        },
      ],
    };
    JSON.stringify(msg.personalizations);
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};

export { sendGridEmail };
