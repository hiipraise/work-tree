//import express
const express = require("express");

//instanciate express
const app = express();
app.use(express.json());

//create the routes
app.get("/", (req, res) => {
  res.end("Welcome to your first backend class!");
});

//expose our beackend through api using server to external requests
app.listen(9000, () => {
  console.log("Listening on http://localhost:9000"); 
});
