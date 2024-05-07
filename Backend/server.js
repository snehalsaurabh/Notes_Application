// Initialization
const express = require('express');
const app = express();

//Home Route (/)
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