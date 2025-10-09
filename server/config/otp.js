const { transporter } = require("./otp.config.js");
const {
  generateOtpEmail,
  generateWelcomeEmail,
} = require("./emailTemplate.js");

module.exports.otp = async (
  email,
  verificationCode,
  registrationDate,
  registrationTime
) => {
  try {
    const { subject, html } = generateOtpEmail(
      verificationCode,
      registrationDate,
      registrationTime
    );

    const response = await transporter.sendMail({
      from: '"Optivest Broking Ltd." <arinsharma.developer@gmail.com>',
      to: email,
      subject: subject,
      html: html,
    });
    console.log("Email sent successfully!", response);
  } catch (error) {
    console.log("An error occurred while sending email: ", error);
  }
};

module.exports.sendWelcomeEmail = async (
  email,
  userName,
  registrationDate,
  registrationTime
) => {
  try {
    const { subject, html } = generateWelcomeEmail(
      userName,
      registrationDate,
      registrationTime
    );

    const response = await transporter.sendMail({
      from: '"Optivest Broking Ltd." <arinsharma.developer@gmail.com>',
      to: email,
      subject: subject,
      html: html,
    });
    console.log("Welcome email sent successfully!", response);
  } catch (error) {
    console.log("An error occurred while sending welcome email: ", error);
  }
};
