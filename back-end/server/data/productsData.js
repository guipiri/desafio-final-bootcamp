const database = require("../infra/database");

exports.getProducts = function () {
  return database.query(
    `SELECT * 
     FROM produtos`
  );
};

exports.getProductId = function (uuid) {
  return database.query(
    `SELECT * 
     FROM produtos 
     WHERE id_produto = $1`,
    [uuid]
  );
};

exports.createProduct = function (product) {
  return database.query(
    `INSERT 
     INTO produtos (nome, descri, preco) 
     VALUES ($1, $2, $3)`,
    [product.nome, product.descri, product.preco]
  );
};

exports.deleteProduct = function (uuid) {
  return database.query(
    `DELETE
     FROM produtos
     WHERE id_cliente = $1`,
    [uuid]
  );
};
