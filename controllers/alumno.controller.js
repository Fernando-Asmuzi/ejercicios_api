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


module.exports = alumnoCtrl;