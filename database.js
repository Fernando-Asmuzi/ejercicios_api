const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',    
    user: 'root',
    password: 'Ferasmu94',
    database: 'ejercicio_db',
    multipleStatements: true
}) ;

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }else{
        console.log('db esta conectada')
    }
});

module.exports = mysqlConnection;