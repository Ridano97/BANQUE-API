const TransactionService = require("../Services/TransactionService");

class TransactionController {

    async getAllTransaction(request, result){
        try {
            const transactions =  await TransactionService.getAllTransaction();
            result.json(transactions);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des transactions"})
        }
    }

    async getTransactionByID(request, result){
        try {
            const transaction = await TransactionService.getTransactionByID(request.params.id);
            result.json(transaction);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la transaction"})
        }
    }
}

module.exports = new TransactionController();

module.exports = new TransactionController();