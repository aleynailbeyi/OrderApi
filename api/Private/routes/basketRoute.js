import express from 'express';
import checkAuth from '../middleware/checkAuth';
import basketController from '../controllers/basketController';

const app = express();

app.post('/create', checkAuth, basketController.create);
app.post('/add', checkAuth, basketController.add);

module.exports = app;
