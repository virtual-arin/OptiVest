const { otp, sendWelcomeEmail } = require("../config/otp.js");
const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

//signup
module.exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Seems you forgot something!" });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must contain a minimum of 8 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationCode: verificationCode,
      verificationCodeExpires: Date.now() + 30 * 60 * 1000,
    });

    await user.save();

    const registrationDate = user.createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const registrationTime = user.createdAt.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    otp(user.email, verificationCode, registrationDate, registrationTime);
    return res.status(201).json(user);
  } catch (error) {
    console.log("An error occured while signing up: ", error);
  }
};

//Verify
module.exports.verify = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res
        .status(400)
        .json({ message: "Verification code is required." });
    }

    const user = await User.findOne({
      verificationCode: code,
      verificationCodeExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "The OTP is invalid or has expired. Please request a new one.",
      });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpires = undefined;
    await user.save();

    // Format registration date and time for the welcome email
    const registrationDate = user.createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const registrationTime = user.createdAt.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    // Send welcome email asynchronously (don't make the user wait)
    sendWelcomeEmail(user.email, user.name, registrationDate, registrationTime);

    return res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    console.log("An error occured while verifying user: ", error);
    return res
      .status(500)
      .json({ message: "An internal server error occurred." });
  }
};

//Login
module.exports.login = async (req, res) => {
  try {
  } catch (error) {}
};

//Logout
module.exports.logout = async (req, res) => {
  try {
  } catch (error) {}
};
