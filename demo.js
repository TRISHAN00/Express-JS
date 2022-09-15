const express = require("express");

const app = express();

app.use(express.json());

[
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

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(books);
});

app.listen(4000, () => {
  console.log("Served is listening on PORT 4000");
});
