const AuthenticateService = require("../Services/AuthenticateService");
const jwt = require("jsonwebtoken");
const config = requir("../Config/config.json");

class AuthenticateController {

    async register(request, result){
        try {
            const token = AuthenticateService.register(request.body);
            result.json({token : token })
        } catch (error) {
            
        }
    }
    async login(request, result){
        try {   
            const{email, password} = request.body;
            const token = await AuthenticateService.login(email, password);
            result.json({token : token})
        } catch (error) {
            result.status(401)
            result.json({error : "Mot de passe ou email incorrect"})
        }
    }

    authenticateToken(request , result , next){
        const authHeader = request.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if(!token){
            result.status(401);
            result.json({error : "Vous n'avez pas accès à cette route"});
        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if(error){
                result.status(401);
                return result.json({error : "Votre token n'est pas valide"})
            }
            request.user = user; 
        })

    }
}

module.exports = new AuthenticateController();