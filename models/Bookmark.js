const mongoose = require("../db/connection");

const BookmarkSchema = new mongoose.Schema({
  title: string,
  url: string,
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = Bookmark;
