# Lesson 1

## create server and Initialize server

Initialize server

```bash
cd server
npm init
```

## Express, Cors, Mysql2

package for server that handle server, connect to db, and make it accessible for frontend

```bash
npm i express cors mysql2
```

create index.js on server and copy this code inside the index

```bash
const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server Running...");
  });
});
```

## Nodemon

to make the aplication rerun after make a change we need nodemon package

```bash
npm i nodemon
```

add nodemon functionality to package.json, inside scripts

```bash
"start": "nodemon index.js"
```

run this code before added nodemon to your application

```bash
node index.js
```

run this code after added nodemon to your application

```bash
npm start
```

## Sequelize

this make us can comunicate to database

```bash
npm i sequelize sequelize-cli
sequelize init
```

config.json configuration

```bash
"development": {
    "username": "root",
    "password": null,
    "database": "pos",
    "host": "localhost",
    "dialect": "mysql"
  },
```

Try to comnicate with database pos
create model named `Posts` in model directory and paste this code

```bash
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postsText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Posts;
};
```

Now we need to add this model to index.js for initializing

```bash
const db = require("./models");

db.sequelize.sync().then(() => {
#   app.listen(3002, () => {
#     console.log("Server Running...");
#   });
});
```

See [Leason 2](https://lesson2.com) Preview for more details
