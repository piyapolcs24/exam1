const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

const fetchData = async () => {
  const url = "https://api.publicapis.org/categories";
  const response = await fetch(url);
  const datajson = await response.json();
  return datajson;
};

const main = async () => {
  const data = await fetchData();
  app.get("/", function (req, res) {
    res.render("index", { count: data.count, categories: data.categories });
  });
};

main();

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});
