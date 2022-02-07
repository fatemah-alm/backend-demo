const { urlencoded } = require("express");

const express = require("express");
// const data = require("./data/data");
const connectDb = require("./db/database");
const dotenv = require("dotenv");
const productsRouter = require("./routers/products.router");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use("/", productsRouter);
app.use("/api/products", productsRouter);

// app.get("/", (req, res) => {
//   res.send("This is home");
// });

// app.get("/api/products", (req, res) => {
//   res.json(data);
// });

// app.post("/api/products", (req, res) => {
//   const { name, image, description, color, quantity, price } = req.body;
//   const product = { name, image, description, color, quantity, price };
//   res.status(201).json({ msg: "product is created", product });
// });

// app.delete("/api/products/:productId");
console.log("Hello World");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is listening", PORT);
  connectDb();
});
