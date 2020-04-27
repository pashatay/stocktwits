const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..public/index.html"));
});

module.exports = { app };