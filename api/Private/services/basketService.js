import db from '../../src/models';
import lang from '../../language';
import { validateAddProduct, validateDeleteProduct } from '../validation/basketValidation';

class basketService {

	static async create(req) {
		try {
			const language = req.headers.language || 'tr';
			const { user_id, product_id, count, status } = req.body;

			const result = await db.sequelize.transaction(async (t) => {
				const product = await db.products.findOne({
					where: {
						id: product_id
					}
				},
				{ transaction: t });
				if (!product) {
					return { type: false, message: lang(language).Product.productFindById.false };
				}

				const total_price = product.price * count;
				const body = {
					user_id,
					total_price,
					status,
					order_items: {
						product_id,
						count
					}
				};
				const basket = await db.orders.create(body, {
					include: {
						model: db.order_items
					}
				}, { transaction: t });
				if (!basket) {
					return { type: false, message: lang(language).Order.createOrder.false };
				}

			});

			return { data: result, type: true, message: 'basarılı' };
		}
		catch (error) {
			return { type: false, message: 'ERROR!!' };
		}
	}
	static async add(req) {
		try {
			const { order_id, product_id, count } = req.body;
			const validated_addPro = validateAddProduct(result1);
			if (!validated_addPro) {
				return { message: validated_addPro.message, type: false };
			}
			const result1 = await db.sequelize.transaction(async (t) => {
				const order = await db.orders.findOne({
					where: {
						id: order_id
					}
				}, { transaction: t });
				const product = await db.products.findOne({
					where: {
						id: product_id
					}
				}, { transaction: t });
				if (order) {
					const new_product = {
						order_id: order_id,
						product_id: product_id,
						count: count
					};

					const products = await db.order_items.create(new_product);
					if (!products) {
						const result = {
							type: false,
							message: 'error, Product did not added to basket'
						};
						return result;
					}
					const total = product.price * count + order.total_price;

					const updatedBasket = await db.orders.update({
						total_price: total
					}, 
					{
						where: {
							id: order_id
						}

					}, { transaction: t });

					if (!updatedBasket) {
						const result = {
							type: false,
							message: 'ERROR! Product did not added to basket.'
						};
						return result;
					}
					return { data: updatedBasket, type: true, message: 'basarılı' };
				}

				else {
					const new_product = {
						order_id: order_id,
						product_id: product_id,
						count: count
					};
					const products = await db.order_items.create(new_product, { transaction: t });
					if (!products) {
						const result = {
							type: false,
							message: 'error,Product did not added to basket'
						};
						return result;
					}
					const result = {
						type: true,
						message: 'Product is successfully added to basket.'
					};
					return result;
				}
			});
			return { data: result1, type: true, message: 'basarılı' };
		}

		catch (error) {
			return { type: false, message: 'ERROR!!' };
		}
	}
	static async delete(req) {
		try {
			const deleted = await db.orders.findOne({
				where: {
					id: req.params.id
				}
			});
			const validated_deletePro = validateDeleteProduct(deleted);
			if (!validated_deletePro) {
				return { message: validated_deletePro.message, type: false };
			}
			if (!deleted) {
				const result = await db.orders.destroy({
					where: { id: req.params.id } });
				if (result) {
					return ({ type: true, message: 'Product is deleted in the basket' });
				}
				else
					return ({ message: 'Product isnt deleted in the basket', type: false });
			}
	
		}
		catch (error) {
			return { type: false, message: 'ERROR!!' };
		}
		
	}

}
module.exports = basketService;