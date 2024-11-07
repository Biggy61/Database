const HistoricalEvent = require("../models/historicalEvent");

exports.getAllHistoricalEvent = async (req, res, next) => {
    try {
        const data = await HistoricalEvent.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Historical event found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Historical event not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getHistoricalEventById = async (req, res, next) => {

    try {
        const data = await HistoricalEvent.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Historical event found!",
                payload: data
            });
        }
        res.status(404).send({
            message: "Historical event not found!",
        });

    } catch (err) {
        res.status(500).send(err);
    }
}


exports.createHistoricalEvent = async (req, res, next) => {

    try {
        const data = new HistoricalEvent({
            name: req.body.name,
            date: req.body.date,
            place: req.body.place
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Historical event created",
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


exports.updateHistoricalEvent = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            date: req.body.date,
            place: req.body.place
        };
        const result = await HistoricalEvent.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Historical event updated",
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

exports.deleteHistoricalEvent = async (req, res, next) => {

    try {
        
        const result = await HistoricalEvent.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(201).send({
                message: "Historical event deleted",
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