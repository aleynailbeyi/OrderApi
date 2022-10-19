'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      name: 'elma',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'karpuz',
      price: 80,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'kavun',
      price: 40,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
