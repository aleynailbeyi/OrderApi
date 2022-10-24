import express from 'express';
import AuthController from '../controllers/authController';

const app = express();

app.post('/register', AuthController.user_register);
app.post('/login', AuthController.user_login);

module.exports = app;