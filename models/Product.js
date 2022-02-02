const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: Text,
  image: Text,
  price: Number,
  color: Text,
});

module.exports = model("product", ProductSchema);
