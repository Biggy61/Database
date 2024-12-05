const express = require('express');
const router = express.Router();

const bludRouter = require("../controllers/blud");

router.get('/', bludRouter.getAllBluds);

router.get('/:id', bludRouter.getBludById);

router.post('/', bludRouter.createBlud);

router.put('/:id', bludRouter.updateBlud);

router.delete('/:id', bludRouter.deleteBlud);

module.exports = router;
