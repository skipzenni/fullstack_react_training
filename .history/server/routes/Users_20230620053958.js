const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const {validateToken} = require('../middlewares/AuthMiddleware')
const {sign} = require('jsonwebtoken');

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
        res.json({error: "User Doesn't Exist!"});
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            res.json({ error: "Wrong Username And Password Conbination"});
        }
        const accessToken = sign({username: user.username, id: user.id}, 'secretkeys');
        res.json({token: accessToken, username: username, id: user.id});
    })
});

router.get('/auth',validateToken, async (req,res) => {
    res.json(req.user)
})
router.get('/info', (req,res) => {
    const id = req.params.id;
    const info = await Users.findByPk(id, {attributes: {exclude: ["password"]}});

    res.json(basicInfo)
})

module.exports = router;