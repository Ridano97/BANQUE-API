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
} 

module.exports = new CompteService();