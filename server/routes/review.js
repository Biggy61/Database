const express = require('express');
const router = express.Router();

const reviewController = require("../controllers/review");

router.get('/', reviewController.getAllProducts);

router.get('/:id', reviewController.getProductById);

router.post('/', reviewController.createProduct);

router.put('/', reviewController.updateProduct);

router.delete('/:id', reviewController.deleteProduct);

module.exports = router;
