# Mail services

## Nodemailer

- The send function is located in /mail/nodemailer.js
- The test data from nodemailer is already set, you change with your own smtp server data
- Use the correct function in the post route at /index.js ( POST -> /mail )
- You can test your mailing with postman or other API test tool

## Sendgrid

- The send function is located in /mail/sendGrid.js
- Update SENDGRID_API_KEY in the .env to your created api key
- Update SENDGRID_TEMPLATE_ID in the to your new created template
- Update the msg object to your needs
- Use the correct function in the post route at /index.js ( POST -> /mail )
- The object ( data ) you pass in sendGridEmail function must match the variables you add in your template
- On https://app.sendgrid.com/settings/sender_auth verify your email or domain

## .env

- Change .env.example to .env and update the values to your needs

---

### Links

- [Nodemailer](https://nodemailer.com/about)
- [Sendgrid](https://app.sendgrid.com)
- [Postman](https://www.postman.com)
- [Insomnia](https://insomnia.rest)
