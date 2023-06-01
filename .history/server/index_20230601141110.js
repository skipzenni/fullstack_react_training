const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log("Server Running...");
  });
})
.catch((err)=>{
  console.error("Error syncing the database:", err);
});
