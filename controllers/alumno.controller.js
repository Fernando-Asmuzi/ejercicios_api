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

module.exports = alumnoCtrl;