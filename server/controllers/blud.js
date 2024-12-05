const Blud = require("../models/blud");

exports.getAllBluds = async (req, res, next) => {
    try {
        const data = await Blud.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Blud found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Blud not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getBludById = async (req, res, next) => {

    try {
        const data = await Blud.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Blud found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Blud not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createBlud = async (req, res, next) => {

    try {
        const data = new Blud({
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Blud created",
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


exports.updateBlud = async (req, res, next) => {
    console.log(req.body)
    
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        };
        const result = await Blud.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Blud updated",
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

exports.deleteBlud = async (req, res, next) => {

    try {
        
        const result = await Blud.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Blud deleted",
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