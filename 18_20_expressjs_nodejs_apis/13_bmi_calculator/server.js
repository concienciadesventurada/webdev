// Basicamente los headers. Dependencias que necesita la pagina web
const express = require("express");
const bodyParser = require("body-parser");

// De ahora en adelante la webapp y su manejo por express sera app.metodo
const app = express();

// Inicializa el servidor en X puerto
app.listen(3000, function() {
  console.log("Started at port 3000");
});

// Toma todo lo que haya en el body.
app.use(bodyParser.urlencoded({extended: true}));

// __dirname contiene la ruta de donde este hosteada la webapp.
// En este caso, envia un html completo al cliente.
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/calculadora_imc", function(req, res) {
  res.sendFile(__dirname + "/calculadora_imc.html");
});

app.post("/", function(req, res) {
  var peso = parseFloat(req.body.peso);
  var estatura = parseFloat(req.body.estatura);

  var imc = peso / Math.pow(estatura, 2);

  res.send("IMC: " + imc);
});
