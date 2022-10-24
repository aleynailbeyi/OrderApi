import db from "../../src/models";
import lang from '../../language';

class orderService {
    static async createOrder(body, language) {
        try {
            const order = {
                user_id: body.decoded,
                total_price: body.total_price
            };
            console.log('order-->', order);
            await db.orders.create(order);
            return { data: order, message: lang(language).Order.createOrder.true, type: true }

        } catch (error) {
            return { message: lang(language).Order.createOrder.false, type: false }
        }
    }
    static async getOrder(language) {
        try {
            const getOrderResult = await db.orders.findAll()
            return { data: getOrderResult, message: lang(language).Order.getOrder.true, type: true }
        } catch (error) {
            return { message: lang(language).Order.getOrder.false, type: false }
        }
    }
    static async getOrderFindById(params) {
        try {
            const orderID = await db.orders.findOne({ where: { id: params.id } });
            return { data: orderID, type: true }
        } catch (error) {
            return { type: false }
        }
    }
    static async deleteOrder(params) {
        try {
            const removeOrder = await db.orders.destroy({ where: { id: params.id } });
            if (removeOrder === null) {
                console.log('Not Found');
            } else {
                return { data: removeOrder, type: true }
            }
        } catch (error) {
            return { type: false }
        }
    }
}
module.exports = orderService