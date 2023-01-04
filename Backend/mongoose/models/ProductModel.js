const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  tags: [String],
  slug: {
    type: String,
    lowercase: true,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
