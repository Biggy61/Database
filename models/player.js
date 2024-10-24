const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    favoriteGames: { type : String, require : true},
    gametime: { type : Number, require : true },
});

module.exports = mongoose.model("Player", schema);