const Review = require("../models/review");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Review.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Review found!",
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
        const data = await Review.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Review found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Review not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProduct = async (req, res, next) => {

    try {
        const data = new Review({
            Autor: req.body.Autor,
            score: req.body.score,
            gameName: req.body.gameName
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Review created",
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
            Autor: req.body.Autor,
            score: req.body.score,
            gameName: req.body.gameNamegit
        };
        const result = await Review.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Review updated",
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
        
        const result = await Review.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Review deleted",
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