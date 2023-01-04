const express = require("express");
const app = express();
const products = ["Guitar", "Violin", "Piano", "Cello"];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:index", (req, res) => {
  if (!products[req.params.index])
    return res.status(400).send("product not found");
  res.send(products[req.params.index]);
});

app.put("/api/products/:index", (req, res) => {
  products[req.params.index] = req.body.title;
  res.send(products[req.params.index]);
});

app.delete("/api/products/:index", (req, res) => {
  products.splice(req.params.index, 1);
  res.send(products);
});

app.post("/api/products/", (req, res) => {
  products.push(req.body.title);
  res.send(products);
});

app.listen(8080);
