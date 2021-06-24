const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  sendMail: function (to, subject, html) {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        from: process.env.MAILER_USER,
        to: to,
        subject: subject,
        html: html,
      };
      transport.sendMail(mailOptions, (err, info) => {
        if (err) reject(err);

        resolve(info);
      });
    });
  },
};
