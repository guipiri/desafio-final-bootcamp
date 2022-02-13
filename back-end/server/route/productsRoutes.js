const express = require("express");
const router = express.Router();
const productsData = require("../data/productsData");

router.get("/products", async function (req, res) {
  const products = await productsData.getProducts();
  res.json(products);
});

router.get("/products/:uuid", async function (req, res) {
  const uuid = req.params.uuid;
  const productById = await productsData.getProductId(uuid);
  res.json(productById);
});

router.post("/products", async function (req, res) {
  const newProduct = req.body;
  await productsData.createProduct(newProduct);
  res.send(`Novo produto criado`);
});

// router.put("/products/:uuid", async function (req, res) {});

router.delete("/products/:uuid", async function (req, res) {
  const uuid = req.params.uuid;
  await productsData.deleteProduct(uuid);
  res.send(`Produto com id ${uuid} deletado!`);
});

module.exports = router;
