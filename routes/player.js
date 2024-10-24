const express = require('express');
const router = express.Router();

const playerController = require("../controllers/player");

router.get('/', playerController.getAllProducts);

router.get('/:id', playerController.getProductById);

router.post('/', playerController.createProduct);

router.put('/', playerController.updateProduct);

router.delete('/:id', playerController.deleteProduct);

module.exports = router;
