import db from '../../src/models';
import lang from '../../language';

class productService {

	static async getProduct(req) {
		const language = req.decoded.language;
		try {
			const getProductResult = await db.products.findAll();
			if (!getProductResult) {
				return { message: lang(language).Product.getProducts.false, type: false };
			}
			return {
				status: 200,
				data: getProductResult,
				message: lang(language).Product.getProducts.true,
				type: true
			};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}
	static async productAdd(req) {
		//const language = req.decoded.language;
		try {
			const body = req.body;
			const product = await db.products.create(body);
			if (!product) {
				const result = {
					type: false,
					message: 'Error, product isnt created'
				};
				return result;
			}
			const result = {
				type: true,
				data: product,
				message: 'product is created successfully'
			};
			return result;
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}
	static async productFindById(req) {
		const language = req.decoded.language;
		try {
			const productID = await db.products.findOne({ where: { id: req.params.id } });
			return { data: productID, message: lang(language).Product.productFindById.true, type: true };
		}
		catch (error) {
			return { message: lang(language).Product.productFindById.false, type: false };
		}
	}
	static async deleteProduct(req) {
		const language = req.decoded.language;
		try {
			const product = await db.products.destroy({
				where: {
					id: req.params.id
				}
			});
			if (!product) { 
				const result = {
					type: true,
					message: 'Product is successfully deleted.'
				};
				return result;
			}
		}
		catch (error) {
			return { message: lang(language).Product.deleteProduct.false, type: false };
		}
	}

}
module.exports = productService;