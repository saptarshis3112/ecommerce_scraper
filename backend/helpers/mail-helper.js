const nodemailer = require("nodemailer");

const { constants: { Environment: {
  SMTP_HOST,
  SMTP_PORT,
  NODEMAILER_PASSWORD,
  NODEMAILER_USER
} } } = require("../config");

module.exports = async (body) => {

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: NODEMAILER_USER,
      pass: NODEMAILER_PASSWORD,
    },
  });

  const { to, subject, text } = body;

  console.log(to, subject, text);

  let info = await transporter.sendMail({
    from: 'foo@example.com', // sender address
    to,
    subject,
    text,
  });

  console.log("Message sent:", info.messageId);

};
