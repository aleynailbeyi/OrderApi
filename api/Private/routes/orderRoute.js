import express from 'express';
import orderController from '../controllers/orderController';
import checkAuth from '../middleware/checkAuth';

const app = express();

app.get('/getOrder', checkAuth, orderController.getOrderResult);
app.post('/createOrder', checkAuth, orderController.userOrder);
app.get('/getOrderFindById/:id', checkAuth, orderController.orderID);
app.delete('/deleteOrder/:id', checkAuth, orderController.removeOrder);

module.exports = app;