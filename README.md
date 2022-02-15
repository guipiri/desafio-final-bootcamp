# Desfio Final Bootcamp Inter Frontend
## Intergrando o o backend feito em Node.js com o frontend feito em React.js

### Resumo: foi feito uma introdução de e-commerce de amplificadores e caixas acústicas.

Projeto no Heroku: https://desafio-final-inter-frontend.herokuapp.com/

- Para criar as rotas foi usado o react-router-dom.
- Foi usado o Bootstrap-react para estilização dos cards, carosel, barra de navegação e formulários com as devidas adaptações.
- Os produtos são mostrados por meio de uma API que consulta uma tabela no banco de dados com as informações dos produtos.
  - Aqui foi usado o Axios para o consumo da API.
- Os produtos da home são mostrados aleatóriamente, possivelmente podem se repetir numa mesma tela. Ao clicar, o usuário é levado para a página do produto.
- Em 'Produtos' são mostrados todos os produtos e ao clicar no card, o usuário é levado para a página específica de cada produto.
- Em 'Minha conta' temos a página de login
  - Caso o usuário seja cadastrado e acerte sua senha, é mostrada uma mensagem de sucesso, mas não existe sessão de usuário.
  - Foi usado bcrypt para criptografar e descriptografar em hash a senha do usuário para não ficar visivel no banco de dados.
  - Foi gerado um token com jwt porém não foi utilizado ainda no projeto.
  - Ao clicar em 'Cadastrar aqui' o usuário é direcionado para a página de cadastro.
- Em 'Cadastro':
  - Todos os campos são obrigatórios.
  - Não é possível se cadastrar com e-mail ou CPF já presentes no banco de dados.
  - A senha e a confirmação de senha devem ser iguais.
  - Preenchido todos os pré-requisitos, o usuário tem seu cadastro efetuado com sucesso e suas informações vão para o banco de dados.
- As API's que foram criadas, forem feitas usando express, cors, bodyParser, bcrypt e jwt
- Para se conectar com o banco de dados foi usado o pg-promise.
- Para manipular o banco de dados foi usado o pgAdmin.
- Por fim, usei o Heroku para subir o projeto.
