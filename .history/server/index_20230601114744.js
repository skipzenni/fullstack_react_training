const express = require("express");
const app = express();

appe(express.json());
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server Running...");
  });
});
