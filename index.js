const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.listen(4000, () => {
  console.log("Served is listening on PORT 4000");
});
