'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.addColumn('order_items', 'isRemoved', { type: Sequelize.BOOLEAN, defaultValue: false });
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
	},

	async down (queryInterface) {
		return queryInterface.removeColumn('order_items', 'isRemoved');
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	}
};
