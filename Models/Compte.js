// Vient de la dependance
const {Model, Data, DataTypes} = require ('sequelize');
//vient de notre fichier Sequelize.js
const sequelize = require ('../Config/Sequelize');

class Compte extends Model {

}

Compte.init({
    co_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    co_type : {
        type : DataTypes.STRING,
        length : 100,
        allowNull : false
    },
    co_solde : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    co_tauxInteret : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    co_decouvert_auto : {
        type : DataTypes.INTEGER,
        length : 11,
        allowNull : true
    },
    co_dateouverture : {
        type : DataTypes.DATE,
        allowNull : true
    },
    co_RIB : {
        type : DataTypes.CHAR,
        length : 27,
        allowNull : true
    },
    fk_client : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
}, {
    sequelize,
    modelName : 'Compte',
    tableName: 'compte',
    timestamps: false
})


module.exports = Compte;