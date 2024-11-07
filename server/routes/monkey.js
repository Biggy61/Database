const express = require('express');
const router = express.Router();

const monkeyRouter = require("../controllers/monkey");

router.get('/', monkeyRouter.getAllMonkeys);

router.get('/:id', monkeyRouter.getMonkeyById);

router.post('/', monkeyRouter.createMonkey);

router.put('/', monkeyRouter.updateMonkey);

router.delete('/:id', monkeyRouter.deleteMonkey);

module.exports = router;
