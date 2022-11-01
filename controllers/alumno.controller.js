const alumnoCtrl = {}
const mysqlConnection = require('../database.js');

alumnoCtrl.getAlumnos = async (req, res) => {
       mysqlConnection.query('Select * from alumno', (err, rows, fields) => {
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

alumnoCtrl.postEjercicio = async (req, res) => {
    const {alumno_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado} = req.body;
    
    let sql = 'INSERT INTO alumno_ejercicio(alumno_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado) VALUES (?,?,?,?,?,?,?,?,?,?)';
    var valores = [alumno_id, ejercicio_id, operacion_1, operacion_2, operacion_3, operacion_4, operacion_5, porcentaje, tiempo, realizado];

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

alumnoCtrl.getPorcentajeTotal = async(req, res) => {
    const { id_alumno } = req.params;
    mysqlConnection.query('SELECT SUM(porcentaje) FROM alumno_ejercicio WHERE alumno_id = ?', [id_alumno], (err, rows, fields) => {
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

alumnoCtrl.getTiempoTotal = async(req, res) => {
    const { id_alumno } = req.params;
    mysqlConnection.query('SELECT SUM(tiempo) FROM alumno_ejercicio WHERE alumno_id = ?', [id_alumno], (err, rows, fields) => {
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

alumnoCtrl.getAlumnoEjercicioResuelto = async (req, res) => {
    const { id_alumno, id_ejercicio } = req.params;
    mysqlConnection.query('SELECT * FROM alumno_ejercicio WHERE alumno_id = ?  AND ejercicio_id = ?', [id_alumno, id_ejercicio], (err, rows, fields) => {
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

alumnoCtrl.postResultado = async (req, res) => {
    const {alu_id,  tiempo_total, porcentaje_total, fecha} = req.body;
    
    let sql = 'INSERT INTO resultado(alu_id,  tiempo_total, porcentaje_total, fecha) VALUES (?,?,?,?)';
    var valores = [alu_id,  tiempo_total, porcentaje_total, fecha];

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

module.exports = alumnoCtrl;