const express = require("express");
const {
  signup,
  login,
  logout,
  verify,
} = require("../controllers/auth.controller.js");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/verify", verify);
authRouter.post("/login", login);
authRouter.get("/logout", logout);

module.exports = authRouter;
