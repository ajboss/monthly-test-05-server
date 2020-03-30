const express = require('express');
const orderRouter = express.Router();

//controllers
const OrderController = require('../controllers/order.controller');

orderRouter.post('/order', OrderController.create);

orderRouter.get('/order', OrderController.read);

orderRouter.put('/order/:id', OrderController.update);

orderRouter.delete('/order/:id', OrderController.del);

module.exports = orderRouter;