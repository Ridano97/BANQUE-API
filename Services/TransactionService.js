const Transaction = require("../Models/Transaction");

class TransactionService{
    async getAllTransaction(){
        return await Transaction.findAll({include : ['compteDebiteur', 'compteBeneficiaire']});
    }

    async getTransactionByID(transactionID){
        return await Transaction.findByPk(transactionID)
    }

    async addTransaction(transaction){
        return await Transaction.create(transaction);
    }
}

module.exports = new TransactionService();