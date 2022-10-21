import db from "../../src/models";
import orderService from '../services/orderService';

class orderController {
    static async getOrderResult(req, res){
        const result = await orderService.getOrder(req.body);
        if(db.orders) {
            res.json({ data: result, message: 'OK', type: true });
        }
        else {
            res.json({ type: false, message: 'Cannot retrieve orders'})
        }
    }
    static async userOrder(req, res){
        const result = await orderService.createOrder(req.body);
        return res.json(result);
    }
    static async orderID(req,res){
        const result = await orderService.getOrderFindById(req.params);
        if(db.orders) {
            res.json({ type: true, data:result, message:'OK'});
        }
        else {
            res.json({ type: false, message: 'Can not get find by id'})
        }
    }
    static async removeOrder(req,res) {
        const result = await orderService.deleteOrder(req.params);
        if(db.orders) {
            res.json({ data: result, type: true, message: 'OK'});
        }
        else {
            res.json({ type: false, message: 'Can not delete by id'});
        }
    }

}
module.exports = orderController