const mongoose = require('../db/connection');

const bookmarkSchema = new mongoose.Schema({
    title: string,
    url: string
});
 
const Bookmark= mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark