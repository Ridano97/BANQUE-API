// Vient de la dependance
const {Model, DataTypes} = require ('sequelize');
//vient de notre fichier Sequelize.js
const sequelize = require ('../Config/Sequelize');
const Compte = require('./Compte');

class Client extends Model {

}

Client.init({
    CL_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CL_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Telephone : {
        type : DataTypes.CHAR,
        length : 10,
        allowNull : true
    },
    CL_Email : {
        type : DataTypes.STRING,
        allowNull : true
    },
    CL_Adresse : {
        type : DataTypes.STRING,
        allowNull : true
    },
    CL_Ville : {
        type : DataTypes.STRING,
        allowNull : true
    },
    CL_CodePostal : {
        type : DataTypes.STRING,
        length : 7,
        allowNull : true
    },
}, {
    sequelize,
    modelName : 'Client',
    tableName: 'client',
    timestamps: false
})

Client.hasMany(Compte, {as : "comptes", foreignKey : "FK_CLIENT"})

module.exports = Client;