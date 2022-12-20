const express = require("express");

const app = express(); // app: la webapp misma.

app.listen(3000, function() {
  console.log("Server started at port 3000");
});

// "path" , callback req(quest) / res(ponse);
app.get("/", function(req, res) {
  res.send("<h1>Hello<h1/>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: hegel@uberlin.de");
});

app.get("/about", function(req, res) {
  res.send("Soy un autodidacta hegeliano. Me llamo Matias.");
});

app.get("/hobbies", function(req, res) {
  res.send("Leer");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
}); // (listen) una conexion de un puerto HTTP determinado.
