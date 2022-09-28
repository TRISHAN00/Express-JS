const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Render all Posts");
});

router.post("/", (req, res) => {
  res.send("create new post");
});

router.put("/", (req, res) => {
  res.send("Update your existing post");
});

router.delete("/", (req, res) => {
  res.send("Delete your existing post");
});

module.exports = router;
