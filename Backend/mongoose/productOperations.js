const ProductModel = require("./models/ProductModel");

const createProduct = async (title, price, tags) => {
  const product = new ProductModel();
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const getAllProducts = async () => {
  const products = await ProductModel.find();
  return products;
};

const deleteProduct = async (_id) => {
  await ProductModel.findByIdAndDelete(_id);
};

const updateProduct = async (_id, title, price, tags) => {
  const product = await ProductModel.findById(_id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
