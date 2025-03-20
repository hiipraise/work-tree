//import express
const express = require("express");
const fs = require("fs");
const path = require("path");

//instanciate express
const app = express();
app.use(express.json());

//create the routes
app.get("/", (req, res) => {
  res.end("Welcome to your first backend class!");
});



// use the file system to read the content of example.txt
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error Reading:", err);
    return;
  }
  console.log("Example content is:", data);
});

fs.writeFile("trywritefile.txt", "trying write file", (err) => {
  if (err) {
    console.error("error writting file", err);
    return;
  }
  console.log("File written successfully");
});

app.get("/receipt", (req, res) => {
  fs.readFile("example.txt", "utf-8", (err, data) => {
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
  fs.readFile("result.txt", "utf-8", (err, data) => {
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

app.post("/donate", (req, res) => {
  const { amount } = req.body;
  fs.appendFile("donation.txt", `${amount}\n`, (err) => {
    if (err) {
      console.error("Error Writing:", err);
      return res.status(500).json({ message: "Error writing donation" });
    }
    res.json({ message: "Donation written successfully" });
  });
  // fs.writeFile("donation.txt", `${amount}`, (err) => {
  //   if (err) {
  //     console.error("Error Writing:", err);
  //     return res.status(500).json({ message: "Error writing donation" });
  //   }
  //   res.json({ message: "Donation written successfully" });
  // });
});

app.get("/poem", (req, res) => {
  fs.readFile("poem.txt", "UTF-8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "Poem.txt not found" });
      }
      return res
        .status(500)
        .json({ message: "Error reading poem.txt", error: err });
    }
    res.json({ message: "Poem", data }); //data is the content of the poem
  });
});

fs.writeFile("newrecord.txt", "This is a new record", (err) => {
  if (err) {
    console.error("Error Writing:", err);
    return;
  }
  console.log("New record written successfully!");
});

//file logger features
// class Shirt {
//   constructor(size, color) {
//     this.size = size;
//     this.color = color;
//   }
// }

// const myShirt = new Shirt("M", "Red");
// console.log(myShirt);

class FileLogger {
  constructor(logFilePath, maxSizeMB = 5) {
    //default max size is 5MB
    this.logFilePath = logFilePath; //path to the log file
    this.maxSizeBytes = maxSizeMB * 1024 * 1024; //convert to bytes
  }

  log(message) {
    //method to log messages
    const timestamp = new Date().toLocaleString(); //convert to timestamp
    const logMessage = `[${timestamp}]  ${message}\n`; //format the message string with the timestamp and message
    fs.appendFile(this.logFilePath, logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file:", err); //log error if any error occurs
        return;
      }
      console.log("Message logged successfully"); //log  message if successful
    });
  }
}

const mylogger = new FileLogger(path.join(__dirname, "transrecord.log")); //create a new instance of the FileLogger class
//use the instance to log a message
const attendanceLogger = new FileLogger(
  path.join(__dirname, "attendancerecord.log")
);

//post request to create a new log entry
app.post("/createlog", (req, res) => {
  const { amount } = req.body; //get the amount from the request body
  mylogger.log(`Transaction of ${amount} was successful`); //log the transaction to the console and the log file using the instance of the FileLogger class
  res.send(
    JSON.stringify({
      status: "Transaction logged successfully",
    })
  );
});

app.post("/attendance", (req, res) => {
  const { name } = req.body;
  attendanceLogger.log(`Attendance of ${name} was successful logged`);
  res.send(
    JSON.stringify({
      status: "Attendance logged successfully",
    })
  );
});

//expose our beackend through api using server to external requests
const port = 9000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
