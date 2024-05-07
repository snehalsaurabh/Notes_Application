// Initialization
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Note = require('./models/Note');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = express();

mongoose.connect(process.env.URL).then(function(){
    // Home Route (/)
    app.get('/', function(req, res) {
        res.send("This is the Home page");
    });

    // Notes Route
    app.get('/notes', async function(req, res) {
        var notes = await Note.find();
        res.json(notes);
    });

    // Starting the server on a PORT
    app.listen(5000, function(){
        console.log("Server started at Port: 5000");
    });
});
