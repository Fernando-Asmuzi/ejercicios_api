const pacienteCtrl = require('../controllers/paciente.controller');

const express = require('express');
const router = express.Router();

router.get('/', pacienteCtrl.getPacientes);
router.post('/', pacienteCtrl.postEjercicio);
router.get('/paciente/:id_paciente', pacienteCtrl.getPacientePorId);
router.post('/resultado', pacienteCtrl.postResultado);
router.get('/resultado/ejercicio/:id_paciente', pacienteCtrl.getPacienteEjercicioResuelto);
router.get('/total/:paciente', pacienteCtrl.getResultadoTotal);
router.get('/ejercicio', pacienteCtrl.getEjercicios);


module.exports = router;