//paquetes necesarios para el proyecto
var express = require('express');
var PORT =process.env.PORT || 5000;
var bodyParser = require('body-parser');
var cors = require('cors');
var controller=require('./controller');
const { response } = require('express');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get ('/agrupaciones',controller.obtenerListas);
app.get ('/agrupaciones/fram',controller.obtenerListaFram);


app.listen(PORT, function () {
  console.log( "Escuchando en el puerto " + PORT );
})
