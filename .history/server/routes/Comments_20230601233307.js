const express = require('express');
const router = express.Router();
const { Comments } = require("../models");

// router.get("/", async (req, res) => {
//     const listOfPosts = await Posts.findAll()
//     res.json(listOfPosts);
// })
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const post = await Comments.findByPk(postId)
    res.json(post);
})
// router.post("/", async (req, res) => {
//     const post = req.body;
//     await Posts.create(post);
//     res.json(post);
// });

module.exports = router;