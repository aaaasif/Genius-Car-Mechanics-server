const express = require ('express');
const {MongoClient} = require ('mongodb');7
require('dotenv').config();


const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kz6u6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get ('/', (req, res) =>{
    res.send('Running Gemius Server');
});

app.listen(port, () => {
    console.log('Running Genius Server From Port', port);
})

