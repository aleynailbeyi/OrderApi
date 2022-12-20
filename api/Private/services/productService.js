import db from '../../src/models';
import lang from '../../language';
import {roleBase} from '../../utils/roleBase';
import { validateCreateProduct, validateDeleteProduct } from '../validation/productValidation';

class productService {

	static async getProduct(req) {
		const language = req.decoded.language;
		try {
			const getProductResult = await db.products.findAll({ where: {
				isRemoved: false
			}});
			if (!getProductResult) {
				return { message: lang(language).Product.getProducts.false, type: false };
			}
			return {
				data: getProductResult,
				message: lang(language).Product.getProducts.true,
				type: true
			};
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async productAdd(req, language) {
		try {
			const body = req.body;
			const product = await db.products.create(body);

			const validated_product = validateCreateProduct(product);
			if (!validated_product) {
				return { message: validated_product.message, type: false };
			}
			if (roleBase(2)) {
				return {data: product,
					message: lang(language).Product.productAdd.true,
					type: true };
			}
			else 
				return { message: 'You dont have permission!', type: false };
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async productFindById(req, language) {
		try {
			const productID = await db.products.findOne({ where: { id: req.params.id, isRemoved: false } });
			if (!productID)
				return ({ type: false, message: lang(language).Product.productFindById.false });
			else
				return { data: productID, message: lang(language).Product.productFindById.true, type: true };
		}
		catch (error) {
			return { message: error.message, type: false };
		}
	}
	static async deleteProduct(req, language) {
		try {
			const product = await db.products.update({
				isRemoved: true
			}, {
				where: {
					id: req.body.product_id
				}
			});
			const validated_product = validateDeleteProduct(product);
			if (!validated_product) {
				return { message: validated_product.message, type: false };
			}
			if (!product && roleBase(2))
				return ({ type: false, message: lang(language).Product.deleteProduct.false });
			else 
				return ({ message: lang(language).Product.deleteProduct.true, type: true });
		}
		catch (error) {
			return { message: error.message, type: false };
		}
	}

}
module.exports = productService;