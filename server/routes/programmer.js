const express = require('express');
const router = express.Router();

const programmerRouter = require("../controllers/programmer");

router.get('/', programmerRouter.getAllProgrammers);

router.get('/:id', programmerRouter.getProgrammerById);

router.post('/', programmerRouter.createProgrammer);

router.put('/:id', programmerRouter.updateProgrammer);

router.delete('/:id', programmerRouter.deleteProgrammer);

module.exports = router;
