# Lesson 9

## Set Jwt Token

`cd server`
intal the package `npm i jsonwebtoken`
then go to routes/Users.js

```javascript
const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
// start
const {sign} = require('jsonwebtoken');
// end

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
        // start
        const accessToken = sign({username: user.username, id: user.id}, 'secretkeys');
        res.json(accessToken);
        // end
    })
});

module.exports = router;
```

## Setting Logic for post data and get response jwt token back and save it in local storage

first wee nee install package bcrypt for the passwort encryption
`npm i bcrypt`

go to routes and create User.js

```javascript
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
    if(!user) res.json({error: "User Doesn't Exist!"});
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong Username And Password Conbination"});
        res.json("You Logged In!!");
    })
});

module.exports = router;
```

Initiating the route in index.js

```javascript
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
```

## Create Middleware

its needed if we will use the token everywhere in frontend, now create `AuthMiddleware.js`

```javascript
  const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) {
        return res.json({error: "User not logged in"})
    }

    try {
        const validToken = verify(accessToken, "secretkeys")
        if (validToken) {
            return next();
        }
    } catch (err) {
        return res.json({error: err});
    }
};

module.exports = {validateToken};
```

## Usage backends and frontends

for example we will place this to Login, when we login we get token and set it to sessionStorage.
After seted token we can use those everywhere we want.

pages/Login.js

```javascript
  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3003/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        navigate("/");
      }
    });
  };
```

for example we will place this to comment post, first we nee to set routes for commant post

go to routes/Comments.js

```javascript
// import
const { validateToken } = require('../middlewares/AuthMiddleware');

// change of post route
router.post("/", validateToken, async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});
```
ok, after that we will make user who has authentication can post comment and if not cant post comment.
got to pages/Post.js

```javascript

  const addComment = () => {
    axios.post(`http://localhost:3003/comments`,
    {commentBody: newComment, PostId: id},
    // add headers
    {
      headers:{
        accessToken: sessionStorage.getItem("accessToken"),
      },
    }).then((response) => {
      // add if else statement
      if (response.data.error) {
        // console.log(sessionStorage.getItem("accessToken"));
        alert(response.data.error);
      } else {
        const commentToAdd = {commentBody: newComment}
        setComments([...comments, commentToAdd]);
      }
    })
  };
```

See [Leason 10](https://lesson2.com) Preview for more details
