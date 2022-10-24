import express from 'express';
import productController from '../controllers/productController';
import checkAuth from '../middleware/checkAuth';

const app = express();

app.get('/getProduct', checkAuth, productController.getProductResult);
app.post('/productAdd', checkAuth, productController.product);
app.get('/productFindById/:id', checkAuth, productController.productID);
app.delete('/deleteProduct/:id', checkAuth, productController.removeProduct);

module.exports = app;