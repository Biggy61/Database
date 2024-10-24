const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    description: { type : String, require : true},
    popularGames: { type : String, require : true },
});

module.exports = mongoose.model("Genre", schema);