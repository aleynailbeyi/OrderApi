import db from '../../src/models';
import lang from '../../language';
import { validateCompleteOrder } from '../validation/orderValidation';

class orderService {

	static async complete(req, language) {
		try {
			const order = await db.orders.update({
				status: req.body.status
			},
			{
				where: {
					id: req.body.order_id
				}
			});
			const validated_order = validateCompleteOrder(order);
			if (!validated_order) {
				return { message: validated_order.message, type: false };
			}
			if (!order) {
				return {type: false, message: lang(language).Order.completeOrder.false};
			}
			return {type: true, message: lang(language).Order.completeOrder.true};
 		} 
		catch (error) {
			return {type: false, message: error.message};
		}
	}
	static async get(req, language) {
		try {
			const getOrderResult = await db.orders.findAll({ where: {
				isRemoved: false
			}});
			return { data: getOrderResult, message: lang(language).Order.getOrder.true, type: true };
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async getOrderFindById(req, language) {
		try {
			const orderID = await db.orders.findOne({ where: { id: req.params.id, isRemoved: false } });
			if (!orderID)
				return { message: lang(language).Order.getOrderFindById.false, type: false };
			else
				return { message: lang(language).Order.getOrderFindById.true, data: orderID, type: true };
		}
		catch (error) {
			return {  type: false, message: error.message };
		}
	}
	static async deleteOrder(req) {
		try {
			const removeOrder = await db.orders.update({
				isRemoved: true
			}, {
				where: {
					id: req.params.id
				}
			});
			if (!removeOrder) 
				return ({ type: false, message: 'order isnt deleted' });
			else
				return ({ type: true, message: 'order is deleted' });
		}
		catch (error) {
			return {  type: false, message: error.message };
		}
	}

}
module.exports = orderService;