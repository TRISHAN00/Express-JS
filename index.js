const express = require("express");
const app = express();
const router = express.Router();

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

const middleware = [customMiddleware, pageBlockUsingUrl];

app.use(middleware);
app.use("/user", router);

router.get("/logout", (req, res) => {
  res.json({
    message: "I am response from logout Handler",
  });
});
router.get("/login", (req, res) => {
  res.send("This is Login Page");
});

router.get("/", (req, res) => {
  res.send(`<h2>This is my first Route</h2>`);
});
router.get("*", (req, res) => {
  res.send(`<h2>404 Not Found</h2>`);
});

const PORK = process.env.PORK || 8080;
app.listen(PORK, () => {
  console.log(`Served is running on pork ${PORK}`);
});
