const express = require('express');
const router = express.Router();

const dogRouter = require("../controllers/dog");

router.get('/', dogRouter.getAllDogs);

router.get('/:id', dogRouter.getDogsById);

router.post('/', dogRouter.createDog);

router.put('/:id', dogRouter.updateDog);

router.delete('/:id', dogRouter.deleteDog);

module.exports = router;
