const express = require('express');
const router = express.Router();

const gamePlatformController = require("../controllers/gamePlatform");

router.get('/', gamePlatformController.getAllProducts);

router.get('/:id', gamePlatformController.getProductById);

router.post('/', gamePlatformController.createProduct);

router.put('/', gamePlatformController.updateProduct);

router.delete('/:id', gamePlatformController.deleteProduct);

module.exports = router;
