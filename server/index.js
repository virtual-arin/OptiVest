const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const authRouter = require("./routes/auth.router.js");
const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome back arin!");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening to port ${port}`);
});
