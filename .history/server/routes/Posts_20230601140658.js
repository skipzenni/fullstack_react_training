const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts);
})
router.post("/", async (req, res) => {
    console.log();
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;