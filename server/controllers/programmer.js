const Programmer = require("../models/programmer");

exports.getAllProgrammers = async (req, res, next) => {
    try {
        const data = await Programmer.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Programmer found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Programmer not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProgrammerById = async (req, res, next) => {

    try {
        const data = await Programmer.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Programmer found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Programmer not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProgrammer = async (req, res, next) => {

    try {
        const data = new Programmer({
            name: req.body.name,
            surname: req.body.surname,
            programmingLanguage: req.body.programmingLanguage,
            salary: req.body.salary
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Programmer created",
                payload: result,
            });
        }
        res.status(404).send({
            message: "Wrong input",
        });
    } catch (err) {
        res.status(500).send(err);
    }
}


exports.updateProgrammer = async (req, res, next) => {
    console.log(req.body)
    
    try {
        const data = {
            name: req.body.name,
            surname: req.body.surname,
            programmingLanguage: req.body.programmingLanguage,
            salary: req.body.salary
        };
        const result = await Programmer.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Programmer updated",
                payload: result,
            });
        }
        res.status(404).send({
            message: "Wrong input",
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteProgrammer = async (req, res, next) => {

    try {
        
        const result = await Programmer.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Programmer deleted",
                payload: result,
            });
        }
        res.status(404).send({
            message: "Wrong input",
        });
    } catch (err) {
        res.status(500).send(err);
    }
};