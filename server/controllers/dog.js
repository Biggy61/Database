const Dog = require("../models/dog");

exports.getAllDogs = async (req, res, next) => {
    try {
        const data = await Dog.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Dog found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Dog not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getDogsById = async (req, res, next) => {

    try {
        const data = await Dog.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Dog found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Dog not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createDog = async (req, res, next) => {

    try {
        const data = new Dog({
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Dog created",
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


exports.updateDog = async (req, res, next) => {
    console.log(req.body)
    
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name
        };
        const result = await Dog.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Dog updated",
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

exports.deleteDog = async (req, res, next) => {

    try {
        
        const result = await Dog.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Dog deleted",
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