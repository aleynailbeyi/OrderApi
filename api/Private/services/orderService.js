import db from "../../src/models";

class orderService {
    static async createOrder(body){
        try {
            const order = {
				user_id: body.user_id,
				total_price: body.total_price
			};
            console.log('order-->',order);
            const new_order = await db.orders.create(order);
            if(!new_order) {
                return { data: null, type:false } 
            }
            return { data: new_order,type: true}

        } catch (error) {
            return { type: false }
        }
    }
    static async getOrder(){
        try {
            const getOrderResult = await db.orders.findAll()
            return {data: getOrderResult, type: true }
        } catch (error) {
            return { type: false }
        }
    }
    static async getOrderFindById(params){
        try {
            const orderID = await db.orders.findOne({ where: {id: params.id}});
            return { data: orderID, type: true }
        } catch (error) {
            return { type: false } 
        }
    }
    static async deleteOrder(params){
        try {
            const removeOrder = await db.orders.destroy({ where: {id: params.id}});
            if(removeOrder === null){
                console.log('Not Found');
            }else {
                return { data: removeOrder, type: true }
            }
        } catch (error) {
            return { type: false}
        }
    }
}
module.exports = orderService