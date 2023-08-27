const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET request
app.get("/get", (req, res) => {
  res.send("This is a GET request.");
  console.log("get request received from client");
});


// POST request
app.post("/post", (req, res) => {
  console.log("Received POST data:", req.body);
  res.json({ message: "POST request received." });
});





app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
