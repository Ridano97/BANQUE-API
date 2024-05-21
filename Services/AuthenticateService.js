const jwt = require("jsonwebtoken");
const config = require("../Confing/config.json");
const Client = require("../Models/Client.js")

class AuthenticateService {

    async register(clientData){
        const client = await Client.create(clientData);
        return this.generateToken(client);
    }

    async login(email, password){
        const client = Client.findOne({where : {CL_Email : email}})
        if (!client || !await client.validatePassword(password)){
                throw new  Error ("Email ou password incorrect")
        }   
        return this.generateToken(client);
     }

    generateToken(client){
        const payload = {
            id : client.CL_ID,
            email : client.CL_Email
        }
        return jwt.sign(payload,config.SECRET, {expiresIn : "1h"})
    }
}




module.exports = new AuthenticateService();