const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    gender: { type : String, require : true},
    race: { type : String, require : true},
    name: { type : String, require : true },
});

module.exports = mongoose.model("Monkey", schema);