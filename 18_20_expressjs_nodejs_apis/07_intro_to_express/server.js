const express = require("express");

const app = express(); // app: la webapp misma.

// "path" , callback req(quest) / res(ponse);
app.get("/", function(req, res) {
  res.send("<h1>Hello<h1/>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000")
}); // (listen) una conexion de un puerto HTTP determinado.
