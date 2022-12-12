module.exports = {
	up: (queryInterface) => {
		return queryInterface.bulkInsert('users', [ {
			name: 'Aleyna',
			lastname: 'İlbeyi',
			email: 'a@gmail.com',
			password: 'char',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Alperen',
			lastname: 'Taşkın',
			email: 'alperentaskin@gmail.com',
			password: 'ssflsmassc',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},
	down: (queryInterface) => {
		return queryInterface.bulkDelete('users', null, {});
	}
};