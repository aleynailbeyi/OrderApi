'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.status.belongsTo(models.orders, { foreignKey: 'order_id'});   
    }
  }
  status.init({
    status: DataTypes.STRING,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'status',
  });
  return status;
};