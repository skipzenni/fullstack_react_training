const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");


const postsRouter = require("./routes/Posts");
app.use("/posts", postsRouter);
const CommentsRouter = require("./routes/Comments");
app.use("/comments", CommentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
db.sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log("Server Running...");
  });
})
.catch((err)=>{
  console.error("Error syncing the database:", err);
});
