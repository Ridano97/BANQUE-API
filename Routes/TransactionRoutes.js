const express = require('express');
const TransactionController = require('../Controllers/TransactionController');
const router = express.Router();

router.get('/', (request, result) => TransactionController.getAllTransaction(request, result))
router.get('/:id', (request, result) => TransactionController.getTransactionByID(request, result))
router.post('/', (request,result) => TransactionController.addTransaction(request,result))
router.delete('/:id', (request, result) => TransactionController.removeTransaction(request, result))
router.patch('/:id', (request , result) => TransactionController.updateTransaction(request, result));





module.exports = router;