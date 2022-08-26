const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node Js</title>
      <style>
          * {margin: 0; padding: 0; box-sizing: border-box;}
          body {
              background-color:gray;
              color: black;
              
          }
      </style>
  </head>
  <body>
      <h2>Hello Node JS</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, suscipit.</p>
  </body>
  </html>
  `);
});

app.listen(4000, () => {
  console.log("Served is listening on PORT 4000");
});
