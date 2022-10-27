const express = require("express");
const videoRouter = express.Router();
const isAdmin = require("../middleware/isAdmin");
const VideoModel = require("../model/video.Model");
videoRouter.post("/", isAdmin, async (req, res) => {
  const { title, video, description, name } = req.body;
  const data = new VideoModel({
    video,
    title,
    description,
    admin_name: name,
  });
  await data.save();
  res.send({ message: "data save ", status: true });
});

videoRouter.get("/", isAdmin, async (req, res) => {
  const data = await VideoModel.find({},{});
  
  res.send({ message: "data success", status: true, data });
});
module.exports = videoRouter;
