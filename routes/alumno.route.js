const alumnoCtrl = require('../controllers/alumno.controller');

const express = require('express');
const router = express.Router();

router.get('/', alumnoCtrl.getAlumnos);

module.exports = router;