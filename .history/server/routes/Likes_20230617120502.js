const express = require('express');
const router = express.Router();
const { Likes } = require("../models");
const { validateToken } = require('../middlewares/AuthMiddleware');

router.post("/", validateToken, async (req,res) => {
    const {} = req.body;
    const UserId = req.user.id;

    await Likes.create({PostId: PostId, Use})
});
module.exports = router;