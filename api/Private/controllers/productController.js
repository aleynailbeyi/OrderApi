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
import 'http';

class productController{
    /**
     * @route GET /private/v1/product/getProduct - get product
     * @group Products 
     * @produces application/json 
     * @consumes application/json 
     * @returns {Error.model}  error
     * @returns {Product.model} success
     * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
     * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
     * @security JWT
     */
    static async getProductResult(req, res){
        const result = await productService.getProduct(req.body, req.headers.language);
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
	 * @produces application/json 
	 * @consumes application/json 
	 * @returns {Product.model} success
	 * @returns {Error.model} error
     * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
     * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
     * @security JWT
	 */
    static async product(req, res){
        const result = await productService.productAdd(req.body, req.headers.language);
        return res.json(result);
    }
    /**
     * @route GET /private/v1/product/productFindById/{id} - get product find by id
     * @group Products
     * @produces application/json
     * @consumes application/json
     * @param {number} id.path.required
     * @returns {Product.model} success
     * @returns {Error.model}  error
     * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
     * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
     * @security JWT
     */
    static async productID(req, res){
        const result = await productService.productFindById(req.params, req.headers.language);
        if (db.products) {
            res.json({ data: result, message: 'OK', type: true });
        }
        else {
            res.json({ message: 'Can not get find by id', type: false })
        }
    }
    /**
     * @route DELETE /private/v1/product/deleteProduct/{id} - get product find by id
     * @group Products
     * @produces application/json
     * @consumes application/json
     * @param {number} id.path.required
     * @returns {Product.model} success
     * @returns {Error.model}  error
     * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
     * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
     * @security JWT
     */
    static async removeProduct(req, res){
        const result = await productService.deleteProduct(req.params, req.headers.language);
        if (db.products) {
            res.json({ data: result, message: 'OK', type: true });
        }
        else{
            res.json({ message: 'Can not delete by id', type: false});
        }
    }
}
module.exports= productController