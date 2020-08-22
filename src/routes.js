const express = require('express');
const routes = express.Router();

const TudoController = require('./controllers/TodoController')

routes.get('/tudo', TudoController.list);
routes.get('/tudo/:id', TudoController.show);
routes.post('/tudo', TudoController.store);
routes.put('/tudo/:id', TudoController.update);
routes.delete('/tudo/:id', TudoController.delet);

module.exports = routes;