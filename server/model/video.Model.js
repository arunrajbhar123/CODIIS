const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
  video: { type: String },
  title: { type: String },
  description: { type: String },
  admin_id: { type: String },
});
const VideoModel = mongoose.model("video", videoSchema);
module.exports = VideoModel;
