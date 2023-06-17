const express = require('express');
const router = express.Router();
const { Likes } = require("../models");
const { validateToken } = require('../middlewares/AuthMiddleware');

router.post("/", validateToken, async (req,res) => {
    const {PostId} = req.body;
    const UserId = req.user.id;

    const found = await Likes.findOne({
        where: {PostId: PostId, UserId: UserId},
    });
    

    await Likes.create({PostId: PostId, UserId: UserId});
    res.json("success");
});
module.exports = router;