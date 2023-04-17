const routes = require('express').Router();

const myController = require('../controllers',);

routes.get('/',myController.namefunction)
routes.get('/lastname',myController.lastnamefunction)

module.exports = routes;