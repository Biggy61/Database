const express = require('express');
const router = express.Router();

const athleteController = require("../controllers/athlete");

router.get('/', athleteController.getAllAthletes);

router.get('/:id', athleteController.getAthleteById);

router.post('/', athleteController.createAthlete);

router.put('/:id', athleteController.updateAthlete);

router.delete('/:id', athleteController.deleteAthlete);

module.exports = router;
