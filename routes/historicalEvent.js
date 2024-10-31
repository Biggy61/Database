const express = require('express');
const router = express.Router();

const historicalEventController = require("../controllers/historicalEvent");

router.get('/', historicalEventController.getAllHistoricalEvent);

router.get('/:id', historicalEventController.getHistoricalEventById);

router.post('/', historicalEventController.createHistoricalEvent);

router.put('/:id', historicalEventController.updateHistoricalEvent);

router.delete('/:id', historicalEventController.deleteHistoricalEvent);

module.exports = router;
