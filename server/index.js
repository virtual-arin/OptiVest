const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const app = express();

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening to port ${port}`);
});
