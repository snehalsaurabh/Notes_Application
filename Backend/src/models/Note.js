/* Mongoose Model
Steps
1. Define the schema -> Note: id, userid, title, content, dateadded
2. Create model -> <model name> <schema> -> Note
*/
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id:{
        type: String,
        unqiue: true,
        required: true,
    },
    userid:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
    },
    dateadded:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Note", noteSchema);