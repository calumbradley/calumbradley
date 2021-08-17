const express = require('express');
const Datastore = require('nedb');
const bp = require('body-parser') 
const env = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SK);
 
const app = express();
 
app.use(bp.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}));

const PORT = process.env.PORT || 5000;
 
app.listen(PORT), () => console.log('server running');

app.post('/data', (req, res) => {
   
    
    // res.send(console.log('Received POST request from CLIENT'))
    //Database
    const database = new Datastore('./database/orders.db')
    database.loadDatabase()
    database.insert(req.body);
    console.log('Added cake order to the database');
    
    //console.log(req.body[0]);
   
    //Accessing array then the object property of price
    let price = req.body[0].price
    // //Logging the price
    console.log(`Cake price is: £${price}`);
   
    //Price is a number
    console.log(typeof price);  
    
//Req - Represents a resource request.
//Res - Represents the response to a request.

    app.post('/create-checkout-session', async (req, res) => {
     
        const session = await stripe.checkout.sessions.create({
            success_url: `http://localhost:${process.env.PORT}/success.html`,
            cancel_url: `http://localhost:${process.env.PORT}/cancel.html`,
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
              {
                price: 20,
                quantity: 1,
              },
            ],
        })
        .then(console.log('Success'))
        .catch(console.log('Fail'))
 
 
        return res.redirect(303, session.url);
    })
         
})