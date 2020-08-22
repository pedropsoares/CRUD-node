const { Model, DataTypes } = require('sequelize');

class Tudo extends Model {
  static init(sequelize) {
    super.init({
      description: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
    }, {
      sequelize
    })
  }
}

module.exports = Tudo;