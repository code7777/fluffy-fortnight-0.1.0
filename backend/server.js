var express = require('express')
var cors = require('cors')
var app = express()
const ethers = require('ethers');
const PaymentProcessor = require('../artifacts/contracts/PaymentProcessor.sol/PaymentProcessor.json');
const { Payment } = require('./db.js')

app.use(cors())
app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
})

//users call this endpoint via frontend when they pick an item to buy
//creates new entry in database and returns id of payment

let paymentId = 300;

app.get('/api/getPaymentId/:id', async function (req, res) {
    paymentId++;
    await Payment.create(
        {
            id: paymentId,
            itemId: req.params.id,
            paid: false
        }
    );
    res.json({ paymentId })
});