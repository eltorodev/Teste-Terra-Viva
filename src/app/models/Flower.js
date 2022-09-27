const { Model, DataTypes } = require('sequelize')

class Flower extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        origin: DataTypes.STRING,
        availability: DataTypes.STRING,
        basic_care: DataTypes.STRING,
      },
      {
        sequelize: connection,
      },
    )
  }
}

module.exports = Flower
