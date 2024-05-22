const Compte = require("../Models/Compte");

class CompteService {
    async getAllCompte(){
        return await Compte.findAll();
    }

    async getCompteByID(compteID){
        return await Compte.findByPk(compteID)
    }
    
    async addCompte(compte){
        return await Compte.create(compte);
    }

    async removeCompte(compteID){
        return await Compte.destroy({
            where : {co_id : compteID}
        })
    }

    async updateCompte(compteID, compte){
        return await Compte.update(compte , {
            where : {co_id : compteID},
            individualHooks : true
        })
    }
    
} 

module.exports = new CompteService();