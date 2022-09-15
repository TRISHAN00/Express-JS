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

app.get("/books", (req, res) => {
  if (req.query.show === "all") {
    return res.json(books);
  }

  if (req.query.price === "800") {
    const result = books.filter((book) => book.price <= 800);
    return res.json(result);
  }

  return res.json(books);
});

// post route
app.post("/books", (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("Served is listening on PORT 4000");
});
