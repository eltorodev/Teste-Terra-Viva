# Teste Desenvolvedor Grupo Terra Viva

API RESTful para cadastro de flores.

A API contém um *controller* chamado `flowers` com os métodos: `get`, `post`, `put`, `delete`.

## Rotas

1. `GET` - /flowers
   - Lista todas as flores cadastradas no banco de dados
     - Retorno: `200` ou `404`


2. `GET` - /flowers/:id
   - Lista todas as flores cadastradas no banco de dados pelo **ID**
     - Retorno: `200` ou `404`


3. `POST` - /flowers/create
   - Cria uma nova flor
     - Retorno: `200` (Se a flor já existe cadastrada) ou `201`

4. `PUT` - /flowers/update/:id
   - Atualiza uma flor cadastrada no banco de dados pelo **ID**
     - Retorno: `404` ou `200`

4. `DELETE` - /flowers/delete/:id
   - Exclui uma flor cadastrada no banco de dados pelo **ID**
     - Retorno: `404` ou `200`

Obs: Em caso de erro ambas rotas retornaram o código `500`.

# Tecnologias utilizadas (Pacotes NPM)
- bcryptjs
- cors
- dotenv
- express
- mysql2
- sequelize


# Instalação e requisitos

Requisitos:
1. NodeJS
2. MySQL

Instalação:

Configurar as credenciais:
Na raiz do projeto contém o arquivo `.env` que pode ser configurado o banco de dados, por favor, configure-o!

`yarn install` ou `npm install`


1. `yarn sequelize db:create`
2. `yarn sequelize migration:create --name=create-flowers`
3. `yarn sequelize db:migrate`

Para rodar em modo DEV:
`yarn dev`

Modo Produção:
`yarn start`

Acesso: http://localhost:300/flowers

Referências:
Utilizei para pegar exemplos de flores

https://www.terraviva.agr.br/