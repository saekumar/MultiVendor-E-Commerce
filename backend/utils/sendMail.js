import nodemailer from 'nodemailer'

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Corrected to SMTP
    port: process.env.SMTP_PORT, // Corrected to SMTP
    service: process.env.SMTP_SERVICE, // Corrected to SMTP
    auth: {
      user: process.env.SMTP_MAIL, // Corrected to SMTP
      pass: process.env.SMTP_PASSWORD, // Corrected to SMTP
    },
  })

  const mailOptions = {
    from: process.env.SMTP_MAIL, // Corrected to SMTP
    to: options.email, // Changed from options.mail to options.email to be consistent with your earlier code
    subject: options.subject,
    text: options.message,
  }

  await transporter.sendMail(mailOptions)
}

export default sendMail
