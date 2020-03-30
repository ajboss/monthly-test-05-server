const express = require('express');
const tablesRouter = express.Router();

//controllers
const TablesController = require('../controllers/tables.controller');

tablesRouter.post('/tables', TablesController.create);

tablesRouter.get('/tables', TablesController.read);

tablesRouter.put('/tables/:id', TablesController.update);

tablesRouter.delete('/tables/:id', TablesController.del);

module.exports = tablesRouter;