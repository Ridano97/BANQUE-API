const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Compte = require('./Compte');

class Transaction extends Model {
    
}

Transaction.init ({
    tr_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    tr_type : {
        type : DataTypes.STRING,
        allowNull : false
    },

    tr_date : {
        type : DataTypes.DATE,
        allowNull :false
    }, 
    
    tr_ponctuel : {
        type : DataTypes.BOOLEAN,
        allowNull :false
    }, 

    fk_compteBeneficiaire : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Compte",
            key : "co_id"
        }
    },


    fk_compteDebiteur : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Compte",
            key : "co_id"
        }
    },

}, {
    sequelize,
    modelName : 'Transaction',
    tableName : 'Transaction',
    timestamps : false

})

Transaction.belongsTo(Compte, {as : "compteDebiteur", foreignKey :"fk_compteDebiteur" });
Transaction.belongsTo(Compte, {as : "compteBeneficiaire", foreignKey :"fk_compteBeneficiaire" });
            //hasOne
module.exports = Transaction;