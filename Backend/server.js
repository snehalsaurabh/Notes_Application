// Initialization
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

mongoose.connect(process.env.URL).then(function(){
    // Home Route (/)
    app.get('/', function(req, res) {
        res.send("This is the Home page");
    });

    // Notes Route
    app.get('/notes', function(req, res) {
        res.send("This is the Notes page");
    });

    // Starting the server on a PORT
    app.listen(5000, function(){
        console.log("Server started at Port: 5000");
    });
});
