const Transaction = require("../Models/Transaction");

class TransactionService {
    
     async getAllTransaction(){
        return await Transaction.findAll({include : [ "compteBeneficiaire" , "compteDebiteur"]});
    }
}

module.exports = new TransactionService(); 