import express from 'express';
import cors from 'cors';
import { sendEmail } from './mail/nodemailer.js';
import { sendGridEmail } from './mail/sendgrid.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.post('/mail', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const data = {
      name,
      email,
      subject,
      message,
    };

    // Nodemailer
    await sendEmail(data);

    // SendGrid
    await sendGridEmail(data);

    res.status(201).json({
      status: 'success',
      message: 'Email sent successfully',
      data: { name, email, subject, message },
    });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Post to http://localhost:${port}/mail`);
});
