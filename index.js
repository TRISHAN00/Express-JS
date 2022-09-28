const express = require("express");

const app = express();
const userRouter = require("./userRoute");
const postRouter = require("./postRoute");

app.use("/user", userRouter);
app.use("/posts", postRouter);

app.get("/products/:prodId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("I am listening" + " " + req.params.prodId);
});

app.get("/", (req, res) => {
  res.send(`<h2>This is my home Route</h2>`);
});

app.get("*", (req, res) => {
  res.send(`<h2>404 Not Found</h2>`);
});

const PORK = process.env.PORK || 8080;
app.listen(PORK, () => {
  console.log(`Served is running on pork ${PORK}`);
});
