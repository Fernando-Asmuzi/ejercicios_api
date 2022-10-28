const ejercicioCtrl = require('../controllers/ejercicio.controller');

const express = require('express');
const router = express.Router();

router.get('/', ejercicioCtrl.getEjercicios);

module.exports = router;