const express = require("express");
const app = express();
cons

app.use(express.json());
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server Running...");
  });
});
