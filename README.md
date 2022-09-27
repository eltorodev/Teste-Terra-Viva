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

## Exemplo de JSON - Create e Update

```JSON
{
  "name": "Mimo",
	"description": "Orquídea Frozen Terra Viva é tingida por uma tinta especial que faz com que os botões da haste abram coloridas! Porém, na próxima florada, sua orquídea não irá florir azul novamente. Essa coloração permanece somente na florada em que a planta foi tingida. Uma nova haste ou uma nova florada irá ser de flores brancas. Há cinco fatores que influenciam no crescimento e desenvolvimento das orquídeas: água, luminosidade (artificial ou natural), temperatura, ventilação e adubação. Qualquer alteração de um desses fatores modifica a correlação entre eles e altera um outro fator ou até mais de um. Portanto, requerem cuidado especial, para melhores resultados.",
  "origin": "Indonésia, Filipinas.",
  "availability": "Ano todo.",
  "basic_care": "A Phalaenopsis não deve receber sol direto e deve ficar em ambiente bem iluminado e ventilado. É necessário irrigar duas vezes por semana com 200 ml de água na raiz e não deixar água acumulada no pratinho, para não apodrecer a raiz.  A adubação deve ser feita uma vez ao mês utilizando N:P:K=20:20:20 ou 10:10:10, seguindo as orientações do fabricante. A Phalaenopsis pode ser cultivada em vaso ou amarrada em árvores. Após a queda de todas as flores, cortar as hastes 3 a 5 cm da sua base."
}
```