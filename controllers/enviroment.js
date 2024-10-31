const Enviroment = require("../models/enviroment");

exports.getAllEnviroments = async (req, res, next) => {
    try {
        const data = await Enviroment.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Enviroment found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Enviroment not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getEnviromentById = async (req, res, next) => {

    try {
        const data = await Enviroment.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Enviroment event found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Enviroment event not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createEnviroment = async (req, res, next) => {

    try {
        const data = new Enviroment({
            region: req.body.region,
            typesOfPlants: req.body.typesOfPlants,
            typesOfAnimals: req.body.typesOfAnimals
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Enviroment created",
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


exports.updateEnviroment = async (req, res, next) => {
    try {
        const data = {
            region: req.body.region,
            typesOfPlants: req.body.typesOfPlants,
            typesOfAnimals: req.body.typesOfAnimals
        };
        const result = await Enviroment.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Enviroment event updated",
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

exports.deleteEnviroment = async (req, res, next) => {

    try {
        
        const result = await Enviroment.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Enviroment event deleted",
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