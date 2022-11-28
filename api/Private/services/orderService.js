import db from '../../src/models';
import lang from '../../language';
import { validateCompleteOrder, validateDeleteOrder } from '../validation/orderValidation';

class orderService {

	static async complete(req) {
		try {
			const language = req.decoded.language;
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
				return {type: false, message: lang(language).Order.completeOrder.false };
			}
			return {type: true, message: lang(language).Order.completeOrder.true };
 		} 
		catch (error) {
			return {type: false, message: 'ERROR'};
		}
	}
	static async get(req) {
		try {
			const language = req.decoded.language;
			const getOrderResult = await db.orders.findAll();
			return { data: getOrderResult, message: lang(language).Order.getOrder.true, type: true };
		}
		catch (error) {
			return { type: false, message: 'ERROR' };
		}
	}
	static async getOrderFindById(req) {
		const language = req.decoded.language;
		try {
			const orderID = await db.orders.findOne({ where: { id: req.params.id } });
			if (!orderID)
				return { message: lang(language).Order.getOrderFindById.false, type: false };
			else
				return { message: lang(language).Order.getOrderFindById.true, data: orderID, type: true };
		}
		catch (error) {
			return {  type: false, message: 'ERROR' };
		}
	}
	static async deleteOrder(req) {
		try {
			const removeOrder = await db.orders.findOne({
				where: {
					id: req.params.id
				}
			});
			const validated_order = validateDeleteOrder(removeOrder);
			if (!validated_order) {
				return { message: validated_order.message, type: false };
			}
			if (removeOrder) {
				const order = await db.orders.destroy({
					where: { id: req.params.id } });
				if (order) {
					return ({ type: true, message: 'order is deleted' });
				}
				else
					return ({ message: 'Order isnt deleted', type: false });
			}
			
		}
		catch (error) {
			return {  type: false, message: 'ERROR' };
		}
	}

}
module.exports = orderService;