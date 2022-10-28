const express = require('express');
const app = express();
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3500);

//Control CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//Middlewares
app.use(express.json());

//Routes

app.use('/api/inicio', require('./routes/alumno.route.js'));
app.use('/api/ejercicio', require('./routes/ejercicio.route.js'));
/* app.use(require('./routes/mascota.route'));
app.use('/api/adopciones', require('./routes/adopcion.route.js'));
app.use('/api/usuario', require('./routes/usuario.route.js'));
app.use('/api/ong', require('./routes/ong.route.js'));
app.use('/api/adoptantes', require('./routes/adoptante.route.js'));
 */
//starting server 
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`);
}); 