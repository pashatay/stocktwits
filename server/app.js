const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..public/index.html"));
});

app.get("/api/tweets/:ticker", (req, res, next) => {
  const ticker = req.params.ticker;
  axios
    .get(`https://api.stocktwits.com/api/2/streams/symbol/${ticker}.json `)
    .then((response) => {
      console.log("stocktwit response", response.data);
      res.status(200).send(response.data);
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  res.status = res.status || 500;
  console.log(err.stack);
  next(err);
});

module.exports = { app };
