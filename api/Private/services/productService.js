import products from '../../src/models/products'
import db from '../../src/models';
import lang from '../../language';

class productService {
    static async getProduct(language) {
        try {
            const getProductResult = await db.products.findAll()
            return { status:200, data: getProductResult, message: lang(language).Product.getProducts.true, type: true };
        }
        catch (error) {
            return { message: lang(language).Product.getProducts.false }
        }
    }
    static async productAdd(req, language) {
        try {
            const product = {
                name: req.name,
                price: req.price,
            }
            await db.products.create(product)
            return { data: product, message: lang(language).Product.productAdd.true, type: true };
        }
        catch (error) {
            return { message: lang(language).Product.productAdd.false }
        }
    }
    static async productFindById(params, language) {
        try {
            const productID = await db.products.findOne({ where: {id: params.id}});
            return { data: productID, message: lang(language).Product.productFindById.true, type: true }
        }
        catch (error) {
            return { message: lang(language).Product.productFindById.false }
        }
    }
    static async deleteProduct(params, language) {
        try {
            const removeProduct = await db.products.destroy({ where: {id: params.id}});
            if (removeProduct === null){
                console.log('Not found');
            } else {
                return { data: removeProduct, message: lang(language).Product.deleteProduct.true, type: true };
            }
        }
        catch (error) {
            return { message: lang(language).Product.deleteProduct.false }
        }
    }
}
module.exports= productService