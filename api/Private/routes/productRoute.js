import express from 'express';
import productController from '../controllers/productController';
import checkAuth from '../middleware/checkAuth';

const app = express();

app.get('/getProduct', checkAuth, productController.getProduct);
app.post('/productAdd', checkAuth, productController.productAdd);
app.get('/productFindById/:id', checkAuth, productController.productFindById); 
app.delete('/deleteProduct/:id', checkAuth, productController.deleteProduct);

module.exports = app;