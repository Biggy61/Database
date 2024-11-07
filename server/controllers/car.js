const Car = require("../models/car");

exports.getAllCars = async (req, res, next) => {
    try {
        const data = await Car.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Car found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Car not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getCarById = async (req, res, next) => {

    try {
        const data = await Car.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Car found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Car not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createCar = async (req, res, next) => {

    try {
        const data = new Car({
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            manufactureYear: req.body.manufactureYear,
            typeOfEngine: req.body.typeOfEngine
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Car created",
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


exports.updateCar = async (req, res, next) => {
    try {
        const data = {
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            manufactureYear: req.body.manufactureYear,
            typeOfEngine: req.body.typeOfEngine
        };
        const result = await Car.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Car updated",
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

exports.deleteCar = async (req, res, next) => {

    try {
        
        const result = await Car.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Car deleted",
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