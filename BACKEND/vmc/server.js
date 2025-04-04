//import express
const express = require("express");
const fs = require("fs");
const path = require("path");
const connectDB = require("./database/dbConnection");

//instanciate express
const app = express();
app.use(express.json());
require("dotenv").config();

//create the routes
const { resultRouter } = require("./src/routes/results.routes");
const { userRouter } = require("./src/routes/user.routes");
const { donationRouter } = require("./src/routes/donation.routes");
const { spellRouter } = require("./src/routes/spell.routes");

app.use("/api/v1/resultapi", resultRouter);
app.use("/api/v1/userapi", userRouter);
app.use("/api/v1/donationapi", donationRouter);
app.use("/api/v1/spell", spellRouter);

app.get("/", (req, res) => {
  res.end("Welcome to your first backend class!");
});

// use the file system to read the content of example.txt
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error Reading:", err);
//     return;
//   }
//   console.log("Example content is:", data);
// });

// app.get("/receipt", (req, res) => {
//   fs.readFile("example.txt", "utf-8", (err, data) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         return res.status(404).json({ message: "File not found" });
//       }
//       return res
//         .status(500)
//         .json({ message: "Error reading file", error: err });
//     }
//     res.json({ message: "file read successfully", data });
//   });
// });

// app.get("/result", (req, res) => {
//   fs.readFile("result.txt", "utf-8", (err, data) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         return res.status(404).json({ message: "Student files not found" });
//       }
//       return res
//         .status(500)
//         .json({ message: "Error reading student files", error: err });
//     }
//     res.json({ message: "Student files", data });
//   });
// });

// app.post("/donate", (req, res) => {
//   const { amount } = req.body;
//   fs.appendFile("donation.txt", `${amount}\n`, (err) => {
//     if (err) {
//       console.error("Error Writing:", err);
//       return res.status(500).json({ message: "Error writing donation" });
//     }
//     res.json({ message: "Donation written successfully" });
//   });
// fs.writeFile("donation.txt", `${amount}`, (err) => {
//   if (err) {
//     console.error("Error Writing:", err);
//     return res.status(500).json({ message: "Error writing donation" });
//   }
//   res.json({ message: "Donation written successfully" });
// });
// });

// fs.writeFile("newrecord.txt", "This is a new record", (err) => {
//   if (err) {
//     console.error("Error Writing:", err);
//     return;
//   }
//   console.log("New record written successfully!");
// });

//file logger features
// class Shirt {
//   constructor(size, color) {
//     this.size = size;
//     this.color = color;
//   }
// }

// const myShirt = new Shirt("M", "Red");
// console.log(myShirt);

// class FileLogger {
//   constructor(logFilePath, maxSizeMB = 5) {
//     this.logFilePath = logFilePath;
//     this.maxSizeBytes = maxSizeMB * 1024 * 1024;
//   }

//   log(message) {
//     const timestamp = new Date().toLocaleString();
//     const logMessage = `[${timestamp}]  ${message}\n`;
//     fs.appendFile(this.logFilePath, logMessage, (err) => {
//       if (err) {
//         console.error("Error writing to log file:", err);
//         return;
//       }
//       console.log("Message logged successfully");
//     });
//   }
// }

// const mylogger = new FileLogger(path.join(__dirname, "transrecord.log"));
// const attendanceLogger = new FileLogger(
//   path.join(__dirname, "attendancerecord.log")
// );

// //post request to create a new log entry
// app.post("/createlog", (req, res) => {
//   const { amount } = req.body;
//   mylogger.log(`Transaction of ${amount} was successful`);
//   res.send(
//     JSON.stringify({
//       status: "Transaction logged successfully",
//     })
//   );
// });

// app.post("/attendance", (req, res) => {
//   const { name } = req.body;
//   attendanceLogger.log(`Attendance of ${name} was successful logged`);
//   res.send(
//     JSON.stringify({
//       status: "Attendance logged successfully",
//     })
//   );
// });

//expose our beackend through api using server to external requests
const PORT = process.env.PORT;
connectDB();
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
