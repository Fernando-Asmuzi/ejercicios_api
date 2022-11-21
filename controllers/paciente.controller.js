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
    const {paciente_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado, intento} = req.body;
    
    let sql = 'INSERT INTO paciente_ejercicio(paciente_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado, intento) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    var valores = [paciente_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado, intento];

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

pacienteCtrl.getEjercicios = async(req, res) => {
    mysqlConnection.query('SELECT * FROM ejercicio', (err, rows, fields) => {
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
    const {pac_id,  tiempo_total, porcentaje_total, fecha, intento} = req.body;
    
    let sql = 'INSERT INTO resultado(pac_id,  tiempo_total, porcentaje_total, fecha, intento) VALUES (?,?,?,?,?)';
    var valores = [pac_id,  tiempo_total, porcentaje_total, fecha, intento];

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


pacienteCtrl.getResultadoTotal = async (req, res) => {
    const {paciente} = req.params;
    mysqlConnection.query('SELECT * FROM resultado WHERE pac_id = ?', [paciente], (err, rows, fields) => {
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