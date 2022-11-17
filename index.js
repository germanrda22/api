const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuario = {
 nombre:'',
 apellido: ''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};
let heroes = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
app.get('/', function(req, res) {
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.contentType('application/json').send(respuesta);
});
app.get('/heroes/:id', function(req,res){
    let heroe = null;
    if(req.params.id){
        heroe = heroes.find(h => h.id.toString() === req.params.id);
    }
    res.contentType('application/json').send(heroe);
    console.log('He entrado en heroe por ' + req.params.id);
});
app.get('/heroes', function(req,res){
    res.contentType('application/json').send(heroes);
    console.log('He entrado en heroes');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});