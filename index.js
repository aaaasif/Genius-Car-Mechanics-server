const express = require ('express');
const {MongoClient} = require ('mongodb');7
require('dotenv').config();


const app = express();
const port = 5000;

const uri = "mongodb+srv://aaaasif:<password>@cluster0.kz6u6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get ('/', (req, res) =>{
    res.send('Running Gemius Server');
});

app.listen(port, () => {
    console.log('Running Genius Server From Port', port);
})

