module.exports = {
	Register: {
		dbUser: 'User already exists.',
		NotNewUser: 'User can not be created',
		NewUser: 'User created'
	},
	Login: {
		success: 'Successful',
		error: 'User can not be login.'
	},
	Product: {
		getProducts: {
			true: 'Get all products.',
			false: 'Error. Can not get all products'
		},
		productAdd: {
			true: 'Added product successfully',
			false: 'Error. Can not add product'
		},
		productFindById: {
			true: 'Find product by id',
			false: 'Error. Can not find product by id'
		},
		deleteProduct: {
			true: 'Deleted product by id',
			false: 'Error. Can not delete product by id',
			basketstatus: 'basket status'
		}
	},
	Order: {
		getOrder: {
			true: 'Get all orders.',
			false: 'Error. Can not get all orders'
		},
		createOrder: {
			true: 'Added order successfully',
			false: 'Error. Can not add order'
		},
		getOrderFindById: {
			true: 'Find order by id',
			false: 'Error. Can not find order by id'
		},
		deleteOrder: {
			true: 'Deleted order by id',
			false: 'Error. Can not delete order by id'
		}
	},
	checkAuth: {
		sendMessage: {
			Unauthorized: 'Auth failed',
			BadReq: 'Invalid token'
		}
	},
	createbasket: {
		true: 'Order created successfully',
		false: 'Order not created.'
	},
	addedprobasket: {
		true: 'Product is successfully added to basket',
		false: 'Error. Product did not added to basket'
	}
};