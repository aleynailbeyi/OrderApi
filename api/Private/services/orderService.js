import db from '../../src/models';
import lang from '../../language';

class orderService {

	static async createOrder(req, body, language, decoded) {
		try {
			console.log('order-->', decoded);
			const order = {
				user_id: req.decoded.user_id,
				total_price: body.total_price
			};
			await db.orders.create(order);
			return { data: order, message: lang(language).Order.createOrder.true, type: true };

		}
		catch (error) {
			return { message: lang(language).Order.createOrder.false, type: false };
		}
	}
	static async getOrder(language) {
		try {
			const getOrderResult = await db.orders.findAll();
			return { data: getOrderResult, message: lang(language).Order.getOrder.true, type: true };
		}
		catch (error) {
			return { message: lang(language).Order.getOrder.false, type: false };
		}
	}
	static async getOrderFindById(params, language) {
		try {
			const orderID = await db.orders.findOne({ where: { id: params.id } });
			return { message: lang(language).Order.getOrderFindById.true, data: orderID, type: true };
		}
		catch (error) {
			return { message: lang(language).Order.getOrderFindById.false, type: false };
		}
	}
	static async deleteOrder(params, language) {
		try {
			const removeOrder = await db.orders.destroy({ where: { id: params.id } });
			if (removeOrder === null) {
				console.log('Not Found');
			}
			else {
				return { message: lang(language).Order.deleteOrder.true, data: removeOrder, type: true };
			}
		}
		catch (error) {
			return { message: lang(language).Order.deleteOrder.false, type: false };
		}
	}

}
module.exports = orderService;