import db from "../../src/models";

class orderService {
    static async createOrder(body){
        try {
            let order_items = [];
            console.log('order_items--->', order_items);
            
            const userOrder = {
                order_id: body.order_id,
                product_id: body.product_id,
                count: body.count
            }
            const dbuserOrder = await db.orders.findOne({
                where: {
                    statuses: '1'
                }
            });
            if(dbuserOrder.statuses[0]){
                return { data: null, type: false}
            }
            const new_order = await db.orders.create(order)
            if(!new_order) {
                return { data: null, type:false } 
            }
            return { data: userOrder,type: true}

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