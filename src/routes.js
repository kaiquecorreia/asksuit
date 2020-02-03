const { Router } = require('express');
const Search = require('./app/controllers/search');
const routes = new Router();

routes.post('/buscar', Search.find);

module.exports = routes;
