const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const authRouter = require("./routes/auth.router.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome back arin!");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening to port ${port}`);
});
