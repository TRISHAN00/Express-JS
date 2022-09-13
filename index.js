const express = require("express");
const fs = require("fs");

const app = express();

const books = [
  {
    id: "1",
    name: "Personal Finance",
    price: "500",
  },
  {
    id: "2",
    name: "Learn Javascript",
    price: "1500",
  },
  {
    id: "3",
    name: "Poor Dad Rich Dad",
    price: "850",
  },
];

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

app.get("/books", (req, res) => {
  if (req.query.show === "all") {
    return res.json(books);
  }

  if (req.query.price === "800") {
    const result = books.filter((book) => book.price <= 800);
    res.json(result);
  }
});

app.get("/about", (req, res) => {
  console.log(req.url);
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send("We hade error into about page.");
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/help", (req, res) => {
  fs.readFile("./pages/help.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send("We had error into help page.");
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.listen(4000, () => {
  console.log("Served is listening on PORT 4000");
});
