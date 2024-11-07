const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    region: { type : String, require : true},
    typesOfPlants: { type : String, require : true},
    typesOfAnimals: { type : String, require : true },
});

module.exports = mongoose.model("Enviroment", schema);