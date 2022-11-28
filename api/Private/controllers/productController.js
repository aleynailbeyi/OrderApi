/**
 * @typedef Product
 * @property {string} name
 * @property {integer} price
 * @property {boolean} type.required
 * @property {string} message.required
 */
/**
 * @typedef new_product
 * @property {string} name
 * @property {integer} price
 */
/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */
import productService from '../services/productService';
import db from '../../src/models';

class productController{

	/**
	 * @route GET /private/v1/product/getProduct - get product
	 * @group Products
	 * @returns {Error.model}  error
	 * @returns {Product.model} success
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async getProduct(req, res){
		const result = await productService.getProduct(req);
		if (db.products) {
			res.json({ data: result, message: 'OK', type: true });
		}
		else {
			res.json({ message: 'Cannot retrieve products', type: false });
		}
	}
	/**
	 * @route POST /private/v1/product/productAdd
	 * @group Products
	 * @param {new_product.model} new_product.body.required 
	 * @returns {Product.model} success
	 * @returns {Error.model} error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async productAdd(req, res){
		const result = await productService.productAdd(req);
		if (db.products) {
			res.json({ data: result, message: 'OK', type: true });
		}
		else {
			res.json({ message: 'Can not add the product'});
		}
	}
	/**
	 * @route GET /private/v1/product/productFindById/{id} - get product find by id
	 * @group Products
	 * @param {number} id.path.required
	 * @returns {Product.model} success
	 * @returns {Error.model}  error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async productFindById(req, res){
		const result = await productService.productFindById(req);
		return res.json(result);
	}
	/**
	 * @route DELETE /private/v1/product/deleteProduct/{id} - delete product by id
	 * @group Products
	 * @param {number} id.path.required
	 * @returns {Product.model} success
	 * @returns {Error.model}  error
	 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
	 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
	 * @security JWT
	 */
	static async deleteProduct(req, res){
		const result = await productService.deleteProduct(req);
		return res.json(result);
	}

}
module.exports= productController;