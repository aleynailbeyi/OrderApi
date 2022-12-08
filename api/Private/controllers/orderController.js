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

import orderService from '../services/orderService';

class orderController {

	/**
	 * @route POST /private/v1/order/complete - complete order
	 * @group Orders
	 * @returns {Error.model}  error
	 * @returns {Order.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async complete(req, res) {
		const result = await orderService.complete(req);
		return res.json(result);
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
		return res.json(result);
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
		return res.json(result);
	}
	/**
	 * @route DELETE /private/v1/order/deleteOrder/{id} - delete order
	 * @group Orders
	 * @param {number} id.path.required
	 * @returns {Order.model} success
	 * @returns {Error.model}  error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async deleteOrder(req, res) {
		const result = await orderService.deleteOrder(req);
		return res.json(result);
	}

}
module.exports = orderController;