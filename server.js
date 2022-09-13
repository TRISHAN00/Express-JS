const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<h2>Hello World</h2>`);
    res.statusCode = 200;
    res.end();
  } else if (req.url === "/hello") {
    res.write(`<h2>Hello Guest</h2>`);
    res.statusCode = 200;
    res.end();
  } else {
    res.write(`<h2>Not Found</h2>`);
    res.statusCode = 200;
    res.end();
  }
});

server.listen(8000, (req, res) => {
  console.log("Server is listening on pork 8000");
});
