const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.ha
});

module.exports = router;