const jwt = require("jsonwebtoken");

module.exports.generateToken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("An error occured while generating token: ", error);
  }
};
