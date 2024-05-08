
const express = require('express');
const router = express.Router();
const Note = require('./../models/Note');

// Notes List Route
router.post('/list', async function(req, res) {
    var notes = await Note.find({userid: req.body.userid});
    res.json(notes);
});   

//Add Route
router.post('/add', async function(req, res) {
    //Update Route created inside of the add route
    await Note.deleteOne({id: req.body.id});

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();

    const response = {message: "New note has been created - " + `id: ${req.body.id}`};
    res.json(response);
});  
    
//Delete Route 
router.post("/delete", async function(req, res){
    await Note.deleteOne({id: req.body.id});

    const response = {message: "Note has been deleted - " + `id: ${req.body.id}`};
    res.json(response);
});

module.exports = router;