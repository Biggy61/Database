const Bohata = require("../models/bohata");

exports.getAllBohatas = async (req, res, next) => {
    try {
        const data = await Bohata.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Bohata found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Bohata not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getBohatasById = async (req, res, next) => {

    try {
        const data = await Bohata.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Bohata found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Bohata not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createBohata = async (req, res, next) => {

    try {
        const data = new Bohata({
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Bohata created",
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


exports.updateBohata = async (req, res, next) => {
    console.log(req.body)
    
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        };
        const result = await Bohata.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Bohata updated",
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

exports.deleteBohata = async (req, res, next) => {

    try {
        
        const result = await Bohata.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Bohata deleted",
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