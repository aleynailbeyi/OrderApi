import db from '../../src/models';
import lang from '../../language';

class productService {

	static async getProduct(language) {
		try {
			const getProductResult = await db.products.findAll();
			return {
				status: 200,
				data: getProductResult,
				message: lang(language).Product.getProducts.true,
				type: true
			};
		}
		catch (error) {
			return { message: lang(language).Product.getProducts.false, type: false };
		}
	}
	static async productAdd(body, language) {
		try {
			const product = {
				name: body.name,
				price: body.price
			};
			await db.products.create(product);
			return { data: product, message: lang(language).Product.productAdd.true, type: true };
		}
		catch (error) {
			return { message: lang(language).Product.productAdd.false, type: false };
		}
	}
	static async productFindById(params, language) {
		try {
			const productID = await db.products.findOne({ where: { id: params.id } });
			return { data: productID, message: lang(language).Product.productFindById.true, type: true };
		}
		catch (error) {
			return { message: lang(language).Product.productFindById.false, type: false };
		}
	}
	static async deleteProduct(params, language) {
		try {
			const removeProduct = await db.products.destroy({ where: { id: params.id } });
			if (removeProduct === null) {
				console.log('Not found');
			}
			else {
				return { data: removeProduct, message: lang(language).Product.deleteProduct.true, type: true };
			}
		}
		catch (error) {
			return { message: lang(language).Product.deleteProduct.false, type: false };
		}
	}

}
module.exports = productService;