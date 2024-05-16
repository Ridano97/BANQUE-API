const TransactionService = require("../Services/TransactionService");

class TransactionController {
    
    async getAllTransaction(request, result){
        try {
            const transaction = await TransactionService.getAllTransaction();
            result.json(transaction)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des clients"})
        }
    }

}

module.exports = new TransactionController();