const express = require('express');
const router = express.Router();

const bohataRouter = require("../controllers/bohata");

router.get('/', bohataRouter.getAllBohatas);

router.get('/:id', bohataRouter.getBohatasById);

router.post('/', bohataRouter.createBohata);

router.put('/:id', bohataRouter.updateBohata);

router.delete('/:id', bohataRouter.deleteBohata);

module.exports = router;
