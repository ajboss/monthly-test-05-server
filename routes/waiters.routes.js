const express = require('express');
const waitersRouter = express.Router();

//controllers
const WaitersController = require('../controllers/waiters.controller');

waitersRouter.post('/waiters', WaitersController.create);

waitersRouter.get('/waiters', WaitersController.read);

waitersRouter.put('/waiters/:id', WaitersController.update);

waitersRouter.delete('/waiters/:id', WaitersController.del);

module.exports = waitersRouter;