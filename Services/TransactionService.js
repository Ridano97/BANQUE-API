const Transaction = require("../Models/Transaction");
const { getClientByID } = require("./ClientService");

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

    async removeTransaction(transactionID){
        return await Transaction.destroy({
            where : {tr_id : transactionID}
          })
        }

    async updateTransaction(transactionID, transaction){
        return await Transaction.update(transaction , {
            where : {tr_id : transactionID},
            individualHooks : true
        })
    }
}

module.exports = new TransactionService();