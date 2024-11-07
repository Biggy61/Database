const express = require('express');
const router = express.Router();

const genreController = require("../controllers/genre");

router.get('/', genreController.getAllProducts);

router.get('/:id', genreController.getProductById);

router.post('/', genreController.createProduct);

router.put('/', genreController.updateProduct);

router.delete('/:id', genreController.deleteProduct);

module.exports = router;
