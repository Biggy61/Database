const GamePlatform = require("../models/gamePlatform");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await GamePlatform.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Products found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Products not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProductById = async (req, res, next) => {

    try {
        const data = await GamePlatform.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Product found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Product not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProduct = async (req, res, next) => {

    try {
        const data = new GamePlatform({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            releaseDate: req.body.releaseDate
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Product created",
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
            manufacturer: req.body.manufacturer,
            releaseDate: req.body.releaseDate
        };
        const result = await GamePlatform.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Product updated",
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
        
        const result = await GamePlatform.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Product deleted",
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