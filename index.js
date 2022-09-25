const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  res.json({
    message: "I am response from Router About Handler",
  });
});

app.get("/contract", (req, res) => {
  res.send("This is Contract Page");
});

app.get("/", (req, res) => {
  res.send(`<h2>This is my first Route</h2>`);
});

app.get("*", (req, res) => {
  res.send(`<h2>404 Not Found</h2>`);
});

const PORK = process.env.PORK || 8080;
app.listen(PORK, () => {
  console.log(`Served is running on pork ${PORK}`);
});
