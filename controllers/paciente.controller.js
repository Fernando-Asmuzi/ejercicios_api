const pacienteCtrl = {}
const mysqlConnection = require('../database.js');

pacienteCtrl.getPacientes = async (req, res) => {
       mysqlConnection.query('Select * from paciente', (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true,
                rows: rows,
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });       
}

pacienteCtrl.postEjercicio = async (req, res) => {
    const {paciente_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado} = req.body;
    
    let sql = 'INSERT INTO paciente_ejercicio(paciente_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado) VALUES (?,?,?,?,?,?,?,?,?,?)';
    var valores = [paciente_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado];

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true 
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}

pacienteCtrl.getPorcentajeTotal = async(req, res) => {
    const { id_paciente } = req.params;
    mysqlConnection.query('SELECT SUM(porcentaje) FROM paciente_ejercicio WHERE paciente_id = ?', [id_paciente], (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true,
                rows: rows
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}

pacienteCtrl.getPacientePorId = async(req, res) => {
    const { id_paciente } = req.params;
    mysqlConnection.query('SELECT * FROM paciente WHERE id_paciente = ?', [id_paciente], (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true,
                rows: rows
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}

pacienteCtrl.getPacienteEjercicioResuelto = async (req, res) => {
    const { id_paciente } = req.params;
    mysqlConnection.query('SELECT * FROM paciente_ejercicio WHERE paciente_id = ? ', [id_paciente], (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true,
                rows: rows
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}

pacienteCtrl.postResultado = async (req, res) => {
    const {pac_id,  tiempo_total, porcentaje_total, fecha} = req.body;
    
    let sql = 'INSERT INTO resultado(pac_id,  tiempo_total, porcentaje_total, fecha) VALUES (?,?,?,?)';
    var valores = [pac_id,  tiempo_total, porcentaje_total, fecha];

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true 
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}

pacienteCtrl.getPacienteId = async (req, res) => {
    const {pac_id} = req.body;
    mysqlConnection.query('SELECT * FROM resultado WHERE pac_id = ?', [pac_id], (err, rows) => {
        if (!err) {
            res.json({ 
                ok: true,
                rows: rows
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}


module.exports = pacienteCtrl;