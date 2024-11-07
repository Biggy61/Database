const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    nationality: { type : String, require : true},
    sport: { type : String, require : true },
});

module.exports = mongoose.model("Athlete", schema);