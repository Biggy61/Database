const Tournament = require("../models/tournament");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Tournament.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Tournament found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Tournament not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProductById = async (req, res, next) => {

    try {
        const data = await Tournament.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Tournament found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Tournament not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProduct = async (req, res, next) => {

    try {
        const data = new Tournament({
            name: req.body.name,
            date: req.body.date,
            game: req.body.game,
            contestantsNum: req.body.contestantsNum
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Tournament created",
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


exports.updateProduct = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            date: req.body.date,
            game: req.body.game,
            contestantsNum: req.body.contestantsNum
        };
        const result = await Tournament.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Tournament updated",
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

exports.deleteProduct = async (req, res, next) => {

    try {
        
        const result = await Tournament.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Tournament deleted",
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