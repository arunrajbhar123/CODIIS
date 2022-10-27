const express = require("express");
const friendRoute = express.Router();
const isAdmin = require("../middleware/isAdmin");
const UserModel = require("../model/user.Model");
friendRoute.get("/", isAdmin, async (req, res) => {
  const users = await UserModel.find({});
  const data = [];
  users.map((el) => {
    data.push({ firstname: el.firstname, lastname: el.lastname });
  });
  res.send({ message: "success", status: true, data });
});
module.exports = friendRoute;
