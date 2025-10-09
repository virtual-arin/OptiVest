const { otp, sendWelcomeEmail } = require("../config/otp.js");
const { generateToken } = require("../config/token.js");
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
    return res.status(201).json({ message: "Verify your email!" });
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

    const token = await generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "None",
      secure: true,
    });

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

    sendWelcomeEmail(user.email, user.name, registrationDate, registrationTime);

    return res
      .status(200)
      .json({ message: "Email verified successfully. ", user });
  } catch (error) {
    console.log("An error occured while verifying user: ", error);
  }
};

//Login
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Incorrect password. Please try again later" });
    }

    const token = await generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "None",
      secure: false,
    });

    return res.status(201).json({ message: "Logged in successfully" });
  } catch (error) {
    console.log("An error occured while logging in user: ", error);
  }
};

//Logout
module.exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(201).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("An error occured while logging out user: ", error);
  }
};
