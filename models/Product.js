const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  price: { type: Number, default: 12 },
  color: String,
  quantity: {
    type: Number,
    min: 0,
  },
});

module.exports = model("product", ProductSchema);
