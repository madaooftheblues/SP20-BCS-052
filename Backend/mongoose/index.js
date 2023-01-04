const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productOperations");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
  .then(async () => {
    console.log("Connected to MongoDB...");
    // const product = await createProduct("Yamaha", 2300, [
    //   "keyboard",
    //   "piano",
    //   "music",
    // ]);
    // console.log("product created", product);

    //await deleteProduct("63b4e1c7f1a5a5a3e2198ab9");
    await updateProduct("63b4c83d614790416df3e0e1", "Guitar", 1000, [
      "music",
      "instrument",
      "acoustic",
    ]);

    const products = await getAllProducts();
    console.log(products);
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(8080);
