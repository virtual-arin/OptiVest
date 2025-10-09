const nodemailer = require("nodemailer");

module.exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "arinsharma.developer@gmail.com",
    pass: "xpzj vthv dvoc tldf",
  },
});
