const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    date: { type : String, require : true},
    place: { type : String, require : true },
});

module.exports = mongoose.model("HistoricalEvent", schema);