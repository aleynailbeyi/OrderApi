import db from '../../src/models';
import lang from '../../language';
import { validateCreateProduct, validateDeleteProduct } from '../validation/productValidation';

class productService {

	static async getProduct(req) {
		const language = req.decoded.language;
		try {
			const getProductResult = await db.products.findAll();
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
			if (!product) {
				const result = {
					type: false,
					message: lang(language).Product.productAdd.false
				};
				return result;
			}
			const result = {
				data: product,
				message: lang(language).Product.productAdd.true,
				type: true
			};
			return result;
		}
		catch (error) {
			return { type: false, message: error.message };
		}
	}
	static async productFindById(req, language) {
		try {
			const productID = await db.products.findOne({ where: { id: req.params.id } });
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
			const product = await db.products.findOne({ where: { id: req.params.id } });
			const validated_product = validateDeleteProduct(product);
			if (!validated_product) {
				return { message: validated_product.message, type: false };
			}
			if (product) {
				const productID = await db.products.destroy({
					where: {
						id: req.params.id
					}
				});
				if (productID)
					return ({ type: true, message: lang(language).Product.deleteProduct.true });
			}
			else 
				return ({  message: lang(language).Product.deleteProduct.false, type: false });
		}
		catch (error) {
			return { message: error.message, type: false };
		}
	}

}
module.exports = productService;