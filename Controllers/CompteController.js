const CompteService = require("../Services/CompteService");

class CompteController {
    
    async getAllCompte(request, result){
        try {
            const comptes = await CompteService.getAllCompte();
            result.json(comptes)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des comptes"})
        }
    }

    async getCompteByID (request, result){
        try {
            const compte = await CompteService.getCompteByID(request.params.id);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue sur la récupération du compte"})
        }
    }

}

module.exports = new CompteController();