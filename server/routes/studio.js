const express = require('express');
const router = express.Router();

const studioController = require("../controllers/studio");

router.get('/', studioController.getAllProducts);

router.get('/:id', studioController.getProductById);

router.post('/', studioController.createProduct);

router.put('/', studioController.updateProduct);

router.delete('/:id', studioController.deleteProduct);

module.exports = router;
