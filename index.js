const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send("We had some issue into the code.");
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/about", (req, res) => {
  res.send("This is about route.");
});

app.get("/help", (req, res) => {
  res.send("This is help route.");
});

app.listen(4000, () => {
  console.log("Served is listening on PORT 4000");
});
