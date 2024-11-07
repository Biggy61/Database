const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    Autor: { type : String, require : true},
    score: { type : Number, require : true},
    gameName: { type : String, require : true },
});

module.exports = mongoose.model("Review", schema);