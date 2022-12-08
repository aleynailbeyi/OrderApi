/**
 * @typedef Basket
 * @property {integer} product_id
 * @property {integer} order_id
 * @property {integer} count
 * @property {boolean} type.required
 * @property {string} message.required
 */
/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */
/**
 * @typedef new_basket
 * @property {integer} user_id
 * @property {integer} product_id
 * @property {integer} count
 * @property {integer} status
 */
/**
 * @typedef new_product
 * @property {integer} order_id
 * @property {integer} product_id
 * @property {integer} count
 */

import basketService from '../services/basketService';

class basketController {

	/**
	 * @route POST /private/v1/basket/create - create basket
	 * @group Baskets
	 * @param {new_basket.model} new_basket.body.required 
	 * @returns {Error.model}  error
	 * @returns {Basket.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async create(req, res) {
		const result = await basketService.create(req);
		return res.json(result);
	}
	/**
	 * @route POST /private/v1/basket/add - add product
	 * @group Baskets
	 * @param {new_product.model} new_product.body.required 
	 * @returns {Error.model}  error
	 * @returns {Basket.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async add(req, res) {
		const result = await basketService.add(req);
		return res.json(result);
	}
	/**
	 * @route DELETE /private/v1/basket/delete/{id} - delete product in the basket
	 * @group Baskets
	 * @param {number} id.path.required 
	 * @returns {Error.model}  error
	 * @returns {Basket.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async delete(req, res) {
		const result = await basketService.delete(req);
		return res.json(result);
	}
	
}

module.exports = basketController;