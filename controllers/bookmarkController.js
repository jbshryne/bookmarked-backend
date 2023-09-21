const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");

//Index
router.get("/", async (req, res) => {
  try {
    res.json(await Bookmark.find());
  } catch (error) {
    res.status(400).json(error);
  }
});

//Create
router.post("/", async (req, res) => {
  try {
    res.json(await Bookmark.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

//Show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
