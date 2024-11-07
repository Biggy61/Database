const Genre = require("../models/studio");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Genre.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Genre found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Genre not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProductById = async (req, res, next) => {

    try {
        const data = await Genre.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Genre found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Genre not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProduct = async (req, res, next) => {

    try {
        const data = new Genre({
            name: req.body.name,
            description: req.body.description,
            popularGames: req.body.popularGames
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Genre created",
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
            description: req.body.description,
            popularGames: req.body.popularGames
        };
        const result = await Genre.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Genre updated",
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
        
        const result = await Genre.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Genre deleted",
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