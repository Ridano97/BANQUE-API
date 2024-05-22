const ClientService = require("../Services/ClientService");

class ClientController {

    async getAllClient(request, result){
        try {
            const clients = await ClientService.getAllClient();
            result.json(clients);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des clients"});
        }
    }

    async getClientByID(request, result){
        try {
            const client = await ClientService.getClientByID(request.params.id);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du client"});
        }
    }
    
    async addClient(request, result){
        try {
            const client = await ClientService.addClient(request.body);
            result.json(client);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenu lors de l'insertion du client"})
        }
    }

    async removeClient(request, result){
        try {
            ClientService.removeClient(request.params.id);
            result.json({message : "Le client a bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression du client"});
            
        }
    }

    async updateClient (request, result){
        try {
            const client = await ClientService.updateClient(request.params.id, request.body); 
            result.json(client)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du client"})
        }
    }
}

module.exports = new ClientController();