const pacienteCtrl = require('../controllers/paciente.controller');

const express = require('express');
const router = express.Router();

router.get('/', pacienteCtrl.getPacientes);
router.post('/', pacienteCtrl.postEjercicio);
router.get('/porcentaje/:id_paciente', pacienteCtrl.getPorcentajeTotal);
router.get('/paciente/:id_paciente', pacienteCtrl.getPacientePorId);
router.post('/resultado', pacienteCtrl.postResultado);
router.get('/resultado/:id_paciente', pacienteCtrl.getPacienteId);
router.get('/resultado/ejercicio/:id_paciente', pacienteCtrl.getPacienteEjercicioResuelto)    

module.exports = router;