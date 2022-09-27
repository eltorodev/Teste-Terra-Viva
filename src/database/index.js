const Sequelize = require('sequelize')
const config = require('../config/database')

const Flower = require('../app/models/Flower')

const connection = new Sequelize(config)

Flower.init(connection)

module.exports = connection
