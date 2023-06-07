const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({username: username, password: hash});
        res.json("SUCCESS");
    })
});
router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await Users.findOne({where: {username: username}});

    if(!user) {
        return res.json({error: "User Doesn't Exist!"});
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
             returnres.json({ error: "Wrong Username And Password Conbination"});
        }
        return res.json("You Logged In!!");
    })
});

module.exports = router;