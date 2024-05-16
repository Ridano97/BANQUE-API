const express = require('express');
const TransactionController = require('../Controllers/TransactionController');
const router = express.Router();

router.get('/', (request,result) => TransactionController.getAllTransaction(request, result) )

module.exports = router;