const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name: { type : String, require : true},
    surname: { type : String, require : true},
    programmingLanguage: { type : String, require : true },
    salary: { type : Number, require : true },
});

module.exports = mongoose.model("Programmer", schema);