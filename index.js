import express from 'express';
import { sendEmail } from './mail/nodemailer.js';
import { sendGridEmail } from './mail/sendgrid.js';

const app = express();
app.use(express.json());

app.post('/mail', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const data = {
      name,
      email,
      message,
    };
    //await sendEmail({ name, email, message });
    await sendGridEmail(data);
    res.status(201).json({
      status: 'success',
      message: 'Email sent successfully',
      data: { name, email, message },
    });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
