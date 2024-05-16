const Client = require("../Models/Client");

class ClientService {
    
    async getAllClient(){
        return await Client.findAll({include : "comptes"});
    }

    getClientByID(clientID){
        return Client.findByPk(clientID)
    }
}

module.exports = new ClientService(); 