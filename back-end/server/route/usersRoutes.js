const express = require("express");
const router = express.Router();
const usersData = require("../data/usersData");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/users", async function (req, res) {
  const users = await usersData.getUsers();
  res.json(users);
});

router.get("/users/:uuid", async function (req, res) {
  const uuid = req.params.uuid;
  const userById = await usersData.getUserId(uuid);
  res.json(userById);
});

//Criando um novo usuário

router.post("/users", async function (req, res) {
  const newUser = req.body;
  if (
    !newUser.nome ||
    !newUser.senha ||
    !newUser.email ||
    !newUser.cpf ||
    !newUser.confirmSenha
  ) {
    return res.status(422).json({ msg: "Todos os campos são obrigatórios!" });
  }

  if (newUser.senha !== newUser.confirmSenha) {
    return res.status(422).json({ msg: "As senhas não batem!" });
  }

  const [existsCpf] = await usersData.existCpf(newUser.cpf);
  if (existsCpf !== undefined) {
    return res.status(422).json({ msg: "CPF já cadastrado!" });
  }

  const [existsEmail] = await usersData.existEmail(newUser.email);
  if (existsEmail !== undefined) {
    return res.status(422).json({ msg: "Email já cadastrado!" });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(newUser.senha, salt);

  try {
    await usersData.createUser(newUser, passwordHash);
    res.status(201).json({ msg: `Usuário cadastrado com sucesso!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erro no servidor!" });
  }
});

// router.put("/users/:uuid", async function (req, res) {});

router.delete("/users/:uuid", async function (req, res) {
  const uuid = req.params.uuid;
  await usersData.deleteUser(uuid);
  res.send(`Usuário com id ${uuid} deletado!`);
});

router.post("/users/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(422).json({ msg: "Todos os campos são obrigatórios!" });
  }

  const [existsUser] = await usersData.existEmail(email);
  if (existsUser == undefined) {
    return res.status(404).json({ msg: "Email não cadastrado!" });
  }

  const checkSenhas = await bcrypt.compare(senha, existsUser.senha);
  console.log(checkSenhas);
  if (!checkSenhas) {
    return res.status(422).json({ msg: "Senha inválida!" });
  }

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: existsUser.id_cliente,
      },
      secret
    );
    res.status(200).json({ msg: "Login efetuado com sucesso!", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erro no servidor!" });
  }
});

module.exports = router;
