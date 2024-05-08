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
        const response = {message: "API Works"};
        res.json(response);
    });

    const noteRouter = require("./routes/Note");
    app.use("/notes", noteRouter);
});

// Starting the server on a PORT
app.listen(5000, function(){
    console.log("Server started at Port: 5000");
});