const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");


const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const CommentRouter = require("./routes/Comments");
app.use("/comments", CommentRouter);

db.sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log("Server Running...");
  });
})
.catch((err)=>{
  console.error("Error syncing the database:", err);
});
