const mongoose = require("../db/connection");

console.log("Bookmark.js running");

const BookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = Bookmark;
