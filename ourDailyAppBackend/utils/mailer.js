const nodemailer = require("nodemailer");
const htmlToText = require("html-to-text");
const pug = require('pug');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.name;
    this.url = url;
    this.from = `Franky Venus <${process.env.EMAIL_FROM}}>`;
  }

  // Transporter Config
  newTransport() {
    if(process.env.NODE_ENV === "producetion") {
      // Sendgrid
      return 1;
    }
    
    return  nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME, 
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual Email
  async send(template, subject) {
    // 1) Render HTML based on a template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
    name: this.name,
      url: this.url,
      subject
    })

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to OurDailyApp!");
  }

  async sendPasswordReset() {
    await this.send('passwordReset', 'Your password reset token (valid for only 10 minutes');
  }
}