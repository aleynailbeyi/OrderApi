/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('roles', [ {
			role: 'User',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role: 'Admin',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('roles', null, {});
	}
};
