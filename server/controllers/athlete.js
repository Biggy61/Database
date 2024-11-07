const Athlete = require("../models/athlete");

exports.getAllAthletes = async (req, res, next) => {
    try {
        const data = await Athlete.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Athlete found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Athlete not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAthleteById = async (req, res, next) => {

    try {
        const data = await Athlete.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Athlete found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Athlete not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createAthlete = async (req, res, next) => {

    try {
        const data = new Athlete({
            name: req.body.name,
            nationality: req.body.nationality,
            sport: req.body.sport
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Athlete created",
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


exports.updateAthlete = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            nationality: req.body.nationality,
            sport: req.body.sport
        };
        const result = await Athlete.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Athlete updated",
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

exports.deleteAthlete = async (req, res, next) => {

    try {
        
        const result = await Athlete.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Athlete deleted",
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