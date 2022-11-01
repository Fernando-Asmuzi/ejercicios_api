const alumnoCtrl = require('../controllers/alumno.controller');

const express = require('express');
const router = express.Router();

router.get('/', alumnoCtrl.getAlumnos);
router.post('/', alumnoCtrl.postEjercicio);
router.get('/porcentaje/:id_alumno', alumnoCtrl.getPorcentajeTotal);
router.get('/tiempo/:id_alumno', alumnoCtrl.getTiempoTotal);
router.post('/resultado', alumnoCtrl.postResultado)    

module.exports = router;