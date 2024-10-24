const Player = require("../models/player");

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Player.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Player found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Player not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProductById = async (req, res, next) => {

    try {
        const data = await Player.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Player found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Player not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createProduct = async (req, res, next) => {

    try {
        const data = new Player({
            name: req.body.name,
            favoriteGames: req.body.favoriteGames,
            gametime: req.body.gametime
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Player created",
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
            favoriteGames: req.body.favoriteGames,
            gametime: req.body.gametime
        };
        const result = await Player.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Player updated",
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
        
        const result = await Player.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Player deleted",
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