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

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = await generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "None",
      secure: false,
    });

    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.log("An error occured while signing up: ", error);
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

    return res.status(201).json(user);
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
