const express = require("express");
const app = express();

app.use(function(req, res, next) {
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server Running...");
  });
});
