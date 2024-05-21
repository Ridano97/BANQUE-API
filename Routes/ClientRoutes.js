const express = require('express');
const ClientController = require('../Controllers/ClientController');
const router = express.Router();

router.get('/', (request,result) => ClientController.getAllClient(request,result))
router.get('/:id',(request, result) => ClientController.getClientByID(request, result));

module.exports = router;