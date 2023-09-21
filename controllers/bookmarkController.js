const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");



//Delete
router.delete("/:id", async (req,res) => {
    try{
        res.json(await Bookmark.findByIdAndDelete(req.params.id))
     }catch(error){
        res.status(400).json(error)
     }
});

//Update
router.put('/:id', async (req,res) => {
    try{
        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true}))
     }catch(error){
        res.status(400).json(error)
     }
});
module.exports = router;
