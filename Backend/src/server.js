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

    // Notes List Route
    app.get('/notes/list', async function(req, res) {
        var notes = await Note.find();
        res.json(notes);
    });   

    app.get('/notes/add', async function(req, res) {
        const newNote = new Note({
            id: "00001",
            userid: "temp@gmail.com",
            title: "My first note",
            content: "This is my first note",
        });
        await newNote.save();

        const response = {message: "New note has been created"};
        res.json(response);
    });   
});
// Starting the server on a PORT
app.listen(5000, function(){
    console.log("Server started at Port: 5000");
});