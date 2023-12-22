const express = require('express');
require('dotenv').config()
const conn = require('./Connection');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

// using cors cross-origin-resource-share
server.use(cors({
    origin:"http://localhost:3000"
}));

server.use(express.json())
// routes 
server.post('/contact-form', (req, res) => {
    console.log("say ! Hello",req.body); 
});


// listen server
server.listen(process.env.SERVER_PORT, () => {
    console.log('Server is listening on port ',process.env.SERVER_PORT);
});