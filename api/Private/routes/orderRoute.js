import express from 'express';
import orderController from '../controllers/orderController';
import checkAuth from '../middleware/checkAuth';

const app = express();

app.post('/complete', checkAuth, orderController.complete);
app.get('/get', checkAuth, orderController.get);
app.get('/getOrderFindById/:id', checkAuth, orderController.getOrderFindById);
app.delete('/deleteOrder/:id', checkAuth, orderController.deleteOrder);

module.exports = app;