const express = require('express');
const router = express.Router();

const enviromentController = require("../controllers/enviroment");

router.get('/', enviromentController.getAllEnviroments);

router.get('/:id', enviromentController.getEnviromentById);

router.post('/', enviromentController.createEnviroment);

router.put('/:id', enviromentController.updateEnviroment);

router.delete('/:id', enviromentController.deleteEnviroment);

module.exports = router;
