'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class statuses extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.statuses.belongsTo(models.orders, { foreignKey: 'status'});
			// define association here
		}
	
	}
	statuses.init({
		status_name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'statuses'
	});
	return statuses;
};