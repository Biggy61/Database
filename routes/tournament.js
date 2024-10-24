const express = require('express');
const router = express.Router();

const tournamentController = require("../controllers/tournament");

router.get('/', tournamentController.getAllProducts);

router.get('/:id', tournamentController.getProductById);

router.post('/', tournamentController.createProduct);

router.put('/', tournamentController.updateProduct);

router.delete('/:id', tournamentController.deleteProduct);

module.exports = router;
