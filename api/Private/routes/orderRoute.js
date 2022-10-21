import express from 'express'
import orderController from '../controllers/orderController';

const app = express()

app.get('/getOrder', orderController.getOrderResult);
app.post('/createOrder', orderController.userOrder);
app.get('/getOrderFindById/:id', orderController.orderID);
app.delete('/deleteOrder/:id', orderController.removeOrder);

module.exports = app;