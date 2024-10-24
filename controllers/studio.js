const Studio = require("../models/studio");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Studio.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Studio found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Studio not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProductById = async (req, res, next) => {

    try {
        const data = await Studio.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Studio found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Studio not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProduct = async (req, res, next) => {

    try {
        const data = new Studio({
            name: req.body.name,
            numberOfEmployees: req.body.numberOfEmployees,
            gameList: req.body.gameList
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Studio created",
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
            numberOfEmployees: req.body.numberOfEmployees,
            gameList: req.body.gameList
        };
        const result = await Studio.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Studio updated",
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
        
        const result = await Studio.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Studio deleted",
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