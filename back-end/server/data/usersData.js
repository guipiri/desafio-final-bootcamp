const database = require("../infra/database");

exports.getUsers = function () {
  return database.query(`SELECT * FROM clientes`);
};

exports.getUserId = function (uuid) {
  return database.query("SELECT * FROM clientes WHERE id_cliente = $1", [uuid]);
};

exports.existEmail = async function (email) {
  const existEmail = await database.query(
    "SELECT * FROM clientes WHERE email = $1",
    [email]
  );
  return existEmail;
};
exports.existCpf = async function (cpf) {
  const existCpf = await database.query(
    "SELECT * FROM clientes WHERE cpf = $1",
    [cpf]
  );
  return existCpf;
};

exports.createUser = function (user, passwordHash) {
  return database.query(
    `INSERT 
     INTO clientes (nome, cpf, email, senha) 
     VALUES ($1, $2, $3, $4)`,
    [user.nome, user.cpf, user.email, passwordHash]
  );
};

exports.deleteUser = function (uuid) {
  return database.query(
    `DELETE
     FROM clientes
     WHERE id_cliente = $1`,
    [uuid]
  );
};
