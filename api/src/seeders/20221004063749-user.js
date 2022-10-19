module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        name: 'Aleyna',
        lastname: 'İlbeyi',
        email: 'a@gmail.com',
        password: 'char',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },
down: (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};