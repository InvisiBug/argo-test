const express = require("express");
const app = express();
const port = 3000;

app.listen(port);
console.log(`App running at http://localhost:${port}`);
console.log();
const name = process.env.NAME || "World";
console.log("Booper");
console.log(`Current version is: ${name}!`);
console.log("This better work");
console.log("This was on the dev branch, but should now be live");

app.get("/health", (req, res) => {
  res.send("OK");
  res.status(200);
});

app.get("/", (req, res) => {});
