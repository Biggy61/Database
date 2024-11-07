const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    numberOfEmployees: { type : Number, require : true},
    gameList: { type : String, require : true },
});

module.exports = mongoose.model("Studio", schema);