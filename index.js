const express = require("express");
const bodyParser = require("body-parser");

const port = 3100;
// Create express instance
const app = express();
const routesTest = require("./src/routes/test.js");

/**
 * ======================
 *      MIDDLEWARE
 * ======================
 */
app.use(bodyParser.urlencoded({ extended: false })); // To parse URL encoded data
app.use(bodyParser.json()); //To parse json data

//both index.js and things.js should be in same directory
app.use(routesTest(express));

//Simple request time logger
app.use(function(req, res, next) {
  console.log("A new request received at " + Date.now());
  //This function call is very important. It tells that more processing is required for the current request and is in the next middleware function/route handler.
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to express tutorial");
});

app.get("/hello", function(req, res) {
  res.send("Hello World!");
});

app.post("/hello", function(req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.get("/hello/:name", function(req, res) {
  res.send("Hi, " + req.params.name);
});

app.get("/things/:id([0-9]{5})", function(req, res) {
  res.send("id: " + req.params.id);
});

// ========== PORT LISTENING
app.listen(port, () => {
  console.log(
    `application start at port ${port}\nPlease visit http://localhost:${port}`
  );
});
