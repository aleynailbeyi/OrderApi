'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class orders extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.orders.hasMany(models.order_items, { foreignKey: 'order_id'});
			models.orders.belongsTo(models.users, {foreignKey: 'user_id'});   
			models.orders.hasMany(models.statuses, {foreignKey: 'status'});
		}
	
	}
	orders.init({
		user_id: DataTypes.INTEGER,
		total_price: DataTypes.FLOAT,
		status: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'orders'
	});
	return orders;
};