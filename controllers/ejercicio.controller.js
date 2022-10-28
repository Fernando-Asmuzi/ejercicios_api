const ejercicioCtrl = {}
const mysqlConnection = require('../database.js');

ejercicioCtrl.getEjercicios = async (req, res) => {
       mysqlConnection.query('Select * from ejercicio', (err, rows, fields) => {
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


module.exports = ejercicioCtrl;