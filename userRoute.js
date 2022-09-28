const router = require("express").Router();

router.get("/logout", (req, res) => {
  res.json({
    message: "I am response from logout Handler",
  });
});
router.get("/login", (req, res) => {
  res.send("This is Login Page");
});

router.get("/signup", (req, res) => {
  res.send("This is signup Page");
});

module.exports = router;
