'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class users extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.users.hasMany(models.orders, {foreignKey: 'user_id'});
			models.users.belongsToMany(models.roles, {
				through: models.user_roles,
				foreignKey: 'userId',
				otherKey: 'role_id'
			});
		}
	
	}
	users.init({
		name: DataTypes.STRING,
		lastname: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'users'
	});
	return users;
};