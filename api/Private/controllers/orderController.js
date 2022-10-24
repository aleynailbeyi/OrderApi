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

class orderController {

	/**
	 * @route GET /private/v1/order/getOrder - get order
	 * @group Orders
	 * @returns {Error.model}  error
	 * @returns {Order.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async getOrderResult(req, res){
		const result = await orderService.getOrder(req.body);
		if (db.orders) {
			res.json({ data: result, message: 'OK', type: true });
		}
		else {
			res.json({ type: false, message: 'Cannot retrieve orders'});
		}
	}
	/**
	 * @route POST /private/v1/order/createOrder
	 * @group Orders
	 * @param {new_order.model} new_order.body.required 
	 * @returns {Order.model} success
	 * @returns {Error.model} error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async userOrder(req, res){
		const result = await orderService.createOrder(req.body);
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
	static async orderID(req, res){
		const result = await orderService.getOrderFindById(req.params);
		if (db.orders) {
			res.json({ type: true, data: result, message: 'OK'});
		}
		else {
			res.json({ type: false, message: 'Can not get find by id'});
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
	static async removeOrder(req, res) {
		const result = await orderService.deleteOrder(req.params);
		if (db.orders) {
			res.json({ data: result, type: true, message: 'OK'});
		}
		else {
			res.json({ type: false, message: 'Can not delete by id'});
		}
	}

}
module.exports = orderController;