//import express
const express = require("express");
const fs = require("fs");

//instanciate express
const app = express();
app.use(express.json());

//create the routes
app.get("/", (req, res) => {
  res.end("Welcome to your first backend class!");
});

//use the file system to read the content of example.txt
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error Reading:", err);
    return;
  }
  console.log("Example content is:", data);
});

app.get("/receipt", (req, res) => {
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "File not found" });
      }
      return res
        .status(500)
        .json({ message: "Error reading file", error: err });
    }
    res.json({ message: "file read successfully", data });
  });
});

app.get("/result", (req, res) => {
  fs.readFile("result.txt", "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "Student files not found" });
      }
      return res
        .status(500)
        .json({ message: "Error reading student files", error: err });
    }
    res.json({ message: "Student files", data });
  });
});

//expose our beackend through api using server to external requests
app.listen(9000, () => {
  console.log("Listening on http://localhost:9000");
});
