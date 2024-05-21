const Client = require("../Models/Client");

class ClientService {

    async getAllClient(){
        return await Client.findAll({include : "comptes"});
    }

    async getClientByID(clientID){
        return await Client.findByPk(clientID)
    }

    async addClient(client){
        return await Client.create(client);
    }
}

module.exports = new ClientService();