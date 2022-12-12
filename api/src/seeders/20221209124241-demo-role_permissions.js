/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('role_permissions', [ {
			role_id: 2,
			permission_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role_id: 2,
			permission_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}  ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('role_permissions', null, {});
	}
};
