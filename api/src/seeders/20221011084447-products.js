'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert('products', [ {
			name: 'elma',
			price: 10,
			createdAt: new Date(),
			updatedAt: new Date(),
			isRemoved: false
		},
		{
			name: 'karpuz',
			price: 80,
			createdAt: new Date(),
			updatedAt: new Date(),
			isRemoved: false
		},
		{
			name: 'kavun',
			price: 40,
			createdAt: new Date(),
			updatedAt: new Date(),
			isRemoved: false
		} ], {});
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('products', null, {});
	}
};
