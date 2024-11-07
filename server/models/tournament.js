const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    date: { type : String, require : true},
    game: { type : String, require : true },
    contestantsNum: { type : Number, require : true },
});

module.exports = mongoose.model("Tournament", schema);