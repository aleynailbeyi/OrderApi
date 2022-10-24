'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class order_items extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.order_items.belongsTo(models.orders, {foreignKey: 'order_id'});
			models.order_items.belongsTo(models.products, {foreignKey: 'product_id'});
		}
	
	}
	order_items.init({
		order_id: DataTypes.INTEGER,
		product_id: DataTypes.INTEGER,
		count: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'order_items'
	});
	return order_items;
};