const Product = require("../models/Product");

exports.fetchProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  try {
    const product = req.body;
    const createdProduct = await Product.create(product);

    res
      .status(201)
      .json({ msg: "Product created successfully", payload: createdProduct });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.status(204).end();
      // json({ msg: "product deleted successfuly", payload: deletedProduct });
    } else {
      res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, product);

    if (updatedProduct) {
      res
        .status(200)
        .json({ msg: "product updated successfully", payload: updatedProduct });
    } else {
      res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
