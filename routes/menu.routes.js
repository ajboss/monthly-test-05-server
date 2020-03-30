const express = require('express');
const menuRouter = express.Router();

//controllers
const MenuController = require('../controllers/menu.controller');

menuRouter.post('/menu', MenuController.create);

menuRouter.get('/menu', MenuController.read);

menuRouter.put('/menu/:id', MenuController.update);

menuRouter.delete('/menu/:id', MenuController.del);

module.exports = menuRouter;