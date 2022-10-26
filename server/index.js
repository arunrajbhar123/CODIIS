const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./config/db");

const signInUser = require("./routes/signin.User");
const signUpUser = require("./routes/signup.User");
const session = require("./routes/session");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/signin", signInUser);
app.use("/signup", signUpUser);
app.use("/session", session);
app.get("/", (req, res) => {
  res.send("codiis Assignment");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch {
    console.log("db is not connected");
  }
  console.log("server is running on ", process.env.PORT);
});
