const { where } = require("sequelize");
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

    async removeClient(clientID){
        return await Client.destroy({
            where : {CL_ID : clientID}
        })
    }

    async updateClient(clientID, client){
        return await Client.update(client , {
            where : {CL_ID : clientID},
            individualHooks : true
        })
    }
    
}

module.exports = new ClientService();