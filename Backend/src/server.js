// Initialization
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//true -> Nested Objects (Correct)
//false -> Nested Objects (Not Correct)

mongoose.connect(process.env.URL).then(function(){
    // Home Route (/)
    app.get('/', function(req, res) {
        res.send("This is the Home page");
    });

    // Notes List Route
    app.get('/notes/list/:userid', async function(req, res) {
        var notes = await Note.find({userid: req.params.userid});
        res.json(notes);
    });   

    app.post('/notes/add', async function(req, res) {
        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content,
        });
        await newNote.save();

        const response = {message: "New note has been created by " + 'id: ${req.body.id}'};
        res.json(response);
    });   
});
// Starting the server on a PORT
app.listen(5000, function(){
    console.log("Server started at Port: 5000");
});