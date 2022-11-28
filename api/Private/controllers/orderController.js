/**
 * @typedef Order
 * @property {integer} user_id
 * @property {integer} total_price
 * @property {boolean} type.required
 * @property {string} message.required
 */
/**
 * @typedef new_order
 * @property {string} name
 * @property {integer} total_price
 */
/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import db from '../../src/models';
import orderService from '../services/orderService';
import lang from '../../language';

class orderController {

	/**
	 * @route POST /private/v1/order/complete - get order
	 * @group Orders
	 * @returns {Error.model}  error
	 * @returns {Order.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async complete(req, res) {
		const result = await orderService.complete(req);
		if (db.orders) {
			res.json({ data: result, message: 'OK', type: true });
		}
		else {
			res.json({ type: false, message: 'Cannot retrieve orders' });
		}
	}

	/**
	 * @route GET /private/v1/order/get - get order
	 * @group Orders
	 * @returns {Error.model}  error
	 * @returns {Order.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async get(req, res) {
		const result = await orderService.get(req);
		if (db.orders) {
			res.json({ data: result, message: 'OK', type: true });
		}
		else {
			res.json({ type: false, message: 'Cannot retrieve orders' });
		}
	}

	/**
	 * @route GET /private/v1/order/getOrderFindById/{id} - get order find by id
	 * @group Orders
	 * @param {number} id.path.required
	 * @returns {Order.model} success
	 * @returns {Error.model}  error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async getOrderFindById(req, res) {
		const result = await orderService.getOrderFindById(req);
		if (db.orders) {
			res.json({ type: true, data: result, message: 'OK' });
		}
		else {
			res.json({ type: false, message: 'Can not get find by id' });
		}
	}
	/**
	 * @route DELETE /private/v1/order/deleteOrder/{id} - get order find by id
	 * @group Orders
	 * @param {number} id.path.required
	 * @returns {Order.model} success
	 * @returns {Error.model}  error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async deleteOrder(req, res) {
		const language = req.decoded.language;
		const result = await orderService.deleteOrder(req);
		if (!db.orders.order_id) {
			res.json({ type: false, message: lang(language).Order.deleteOrder.false });
		}
		else {
			res.json({ data: result, type: true, message: 'Can not delete by id' });
		}
	}

}
module.exports = orderController;