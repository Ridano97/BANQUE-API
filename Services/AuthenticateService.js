const jwt = require("jsonwebtoken");
const config = require('../Config/config.json');
const Client = require("../Models/Client");

class AuthenticateService{
    async register(clientData){
        const client = await Client.create(clientData);
        return this.generateToken(client);
    }

    async login(email, password){
        const client = await Client.findOne({ where : {CL_Email : email}})
        if (!client || !await client.validatePassword(password)) {
            throw new Error("Email ou password n'est pas correct")
        }
        return this.generateToken(client);
    }

    generateToken(client){
        const payload = {
            id: client.CL_ID,
            email: client.CL_Email
        }
        return jwt.sign(payload,config.SECRET,{expiresIn: '1h'})
    }
}

module.exports = new AuthenticateService();