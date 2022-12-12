/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('permissions', [ {
			permission: 'Deleting Product',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Adding Product',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('permissions', null, {});
	}
};
