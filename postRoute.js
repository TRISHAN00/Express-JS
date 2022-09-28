const router = require("express").Router();

router.get("/", (req, res) => {
  const { category, page, filter } = req.query;
  res.send("Render all Posts");
});

router.get("/:postId", (req, res) => {
  res.send("I am POST = " + req.params.postId);
});

router.post("/:postId", (req, res) => {
  console.log(req.params);
  res.send("create new post");
});

router.put("/:postId", (req, res) => {
  console.log(req.params);
  res.send("Update your existing post = " + req.params.postId);
});

router.delete("/postId", (req, res) => {
  console.log(req.params);
  res.send("Delete your existing post = " + req.params.postId);
});

module.exports = router;
