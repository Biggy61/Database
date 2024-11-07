const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    manufacturer: { type : String, require : true},
    model: { type : String, require : true},
    manufactureYear: { type : String, require : true },
    typeOfEngine: { type : String, require : true },
});

module.exports = mongoose.model("Car", schema);