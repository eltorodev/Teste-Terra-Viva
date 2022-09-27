# Teste Desenvolvedor Grupo Terra Viva

API RESTful para cadastro de flores.

A API contém um _controller_ chamado `flowers` com os métodos: `get`, `post`, `put`, `delete`.

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

5. `DELETE` - /flowers/delete/:id
   - Exclui uma flor cadastrada no banco de dados pelo **ID**
     - Retorno: `404` ou `200`

Obs: Em caso de erro ambas rotas retornaram o código `500`.

# Tecnologias utilizadas (Pacotes NPM)

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
	"description": "Deixe a imaginação fluir e leve a natureza para os lugares mais inusitados. A Orquídea Mimo Terra Viva é uma maneira divertida e diferente de levar a natureza para dentro de qualquer ambiente, onde “arranjos florais” assumem um significado totalmente novo. as Orquídeas Mimo são plantas do tamanho mais compacto em uma diversidade de cores para todos os gostos, que acompanham um vaso magnético, de cores contemporâneas (verde, rosa ou azul), os quais podem ser grudadas em qualquer superfície metálica. Uma grande tendência e solução para apartamento e escritórios, que estão cada vez menores ou simplesmente para quem estiver procurando uma decoração criativa ou um presente original e inusitado.",
	"origin": "Indonésia, Filipinas.",
  "availability": "Ano todo.",
  "basic_care": "A Phalaenopsis não deve receber sol direto e deve ficar em ambiente bem iluminado e ventilado. É necessário irrigar uma vez por semana com um pouco de água na raiz e não deixar água acumulada no vazinho, para não apodrecer a raiz.  A adubação deve ser feita uma vez ao mês utilizando N:P:K=20:20:20 ou 10:10:10, seguindo as orientações do fabricante. A Phalaenopsis pode ser cultivada em vaso ou amarrada em árvores. Após a queda de todas as flores, cortar as hastes 3 a 5 cm da sua base."
}

```
