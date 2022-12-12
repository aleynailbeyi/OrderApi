import express from 'express';
import productController from '../controllers/productController';
import checkAuth from '../middleware/checkAuth';
import {roleBase} from '../../utils/roleBase';

const app = express();

app.get('/getProduct', checkAuth, productController.getProduct);
app.post('/productAdd', roleBase(2), checkAuth, productController.productAdd);
app.get('/productFindById/:id', checkAuth, productController.productFindById); 
app.delete('/deleteProduct/:id', roleBase(1), checkAuth, productController.deleteProduct);

module.exports = app;