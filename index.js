const express = require('express');
const app = express();
const clientRoutes = require('./Routes/ClientRoutes');
const compteRoutes = require('./Routes/CompteRoutes');
const transactionRoutes = require('./Routes/TransactionRoutes');
const authenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateController = require('./Controllers/AuthenticateController');


app.use(express.json());

app.use('/auth', authenticateRoutes)
app.use('/clients', AuthenticateController.authenticateToken, clientRoutes)
app.use('/comptes',AuthenticateController.authenticateToken, compteRoutes)
app.use('/transactions',AuthenticateController.authenticateToken, transactionRoutes)

module.exports = app;


























/* const Client = require('./Models/Client');
const Compte = require('./Models/Compte');
const Transaction = require('./Models/Transaction');

Client.findAll({include : "comptes"}).then(clients => {
    clients.map(client => {
        console.log(client.toJSON());
    });
})


Compte.findAll().then(comptes => {
    comptes.map(compte => {
        console.log(compte.toJSON());
    });
})

Transaction.findAll().then(transactions => {
    let transactionsData = transactions.map(transaction => transaction.get({plain:true}))
    console.log(transactionsData);
}) */