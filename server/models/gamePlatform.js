const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    manufacturer: { type : String, require : true},
    releaseDate: { type : String, require : true },
});

module.exports = mongoose.model("GamePlatform", schema);