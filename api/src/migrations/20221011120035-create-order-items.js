'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('order_items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			order_id: {
				type: Sequelize.INTEGER,
				references: { model: 'orders', key: 'id' }
			},
			product_id: {
				type: Sequelize.INTEGER,
				references: { model: 'products', key: 'id' }
			},
			count: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('order_items');
	}
};