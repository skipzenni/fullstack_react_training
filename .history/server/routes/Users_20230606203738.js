const express = require('express');
const router = express.Router();
const { Users } = require("../models");

// router.get("/", async (req, res) => {
//     const listOfPosts = await Posts.findAll()
//     res.json(listOfPosts);
// })
// router.get("/byId/:id", async (req, res) => {
//     const id = req.params.id;
//     const post = await Posts.findByPk(id)
//     res.json(post);
// })
router.post("/", async (req, res) => {
});

module.exports = router;