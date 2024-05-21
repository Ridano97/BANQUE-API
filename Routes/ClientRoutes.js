const express = require('express');
const ClientController = require('../Controllers/ClientController');
const { request } = require('..');
const router = express.Router();

router.get('/', (request,result) => ClientController.getAllClient(request,result))
router.get('/:id',(request, result) => ClientController.getClientByID(request, result));
router.post('/' , (request, result) => ClientController.addClient(request, result));

module.exports = router;