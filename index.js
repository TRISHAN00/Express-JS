const express = require("express");
const morgan = require("morgan");
const app = express();

// app.use(morgan("dev"));

function customMiddleware(req, res, next) {
  console.log("All is well");
  console.log(req.url);
  next();
}

function pageBlockUsingUrl(req, res, next) {
  if (req.url === "/contract") {
    res.send(`<h2>Our All Service Currently Declined.</h2>`);
  }
  next();
}

app.use(customMiddleware);

app.use(pageBlockUsingUrl);

app.get("/about", morgan("dev"), (req, res) => {
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
