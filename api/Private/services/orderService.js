import db from '../../src/models';
import lang from '../../language';

class orderService {

	static async complete(req) {
		try {
			//const language = req.decoded.language;
			const order = await db.orders.update({
				status: req.body.status
			},
			{
				where: {
					id: req.body.order_id
				}
			});
			if (!order) {
				return {type: false, message: 'Order not completed!!' };
			}
			return {type: true, message: 'Success'};
 		} 
		catch (error) {
			return {type: false, message: 'ERROR'};
		}
	}
	static async get(language) {
		try {
			const getOrderResult = await db.orders.findAll();
			return { data: getOrderResult, message: lang(language).Order.getOrder.true, type: true };
		}
		catch (error) {
			return { message: lang(language).Order.getOrder.false, type: false };
		}
	}
	static async getOrderFindById(req, language) {
		try {
			const orderID = await db.orders.findOne({ where: { id: req.params.id } });
			return { message: lang(language).Order.getOrderFindById.true, data: orderID, type: true };
		}
		catch (error) {
			return { message: lang(language).Order.getOrderFindById.false, type: false };
		}
	}
	static async deleteOrder(req, language) {
		try {
			const removeOrder = await db.orders.destroy({
				where: { id: req.params.id } });
			if (!removeOrder) {
				const result = {
					type: true,
					message: 'Order is successfully deleted.'
				};
				return result;
			}
		}
		catch (error) {
			return { message: lang(language).Order.deleteOrder.false, type: false };
		}
	}

}
module.exports = orderService;