const express = require("express");
const app = express();
const PORK = process.env.PORK || 8080;

app.get("/", (req, res) => {
  res.send(`<h2>This is my first Route</h2>`);
});

app.listen(PORK, () => {
  console.log(`Served is running on pork ${PORK}`);
});
