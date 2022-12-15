const Partida = {
  enProgreso: true,
  secuenciaSimonDice: [],
  nivel: 1
};

function anadirASecuencia() {
  var numeroBoton = Math.floor(Math.random() * 4);

  Partida.secuenciaSimonDice.push(numeroBoton);

  switch (numeroBoton) {
    case 0:
      animarBoton("#green");
      return "#green"
    case 1:
      animarBoton("#red");
      return "#red"
    case 2:
      animarBoton("#yellow");
      return "#yellow"
    case 3:
      animarBoton("#blue");
      return "#blue"
    default:
      break;
  }
}

function codigoBoton(idBoton) {
  switch (idBoton) {
    case "#green":
      return 0
    case "#red":
      return 1
    case "#yellow":
      return 2
    case "#blue":
      return 3
  }
}

function compararInputConSecuencia(valorBoton) {
  var i = Partida.secuenciaSimonDice.length - 1;

  console.log(Partida.secuenciaSimonDice[i]);
  
  if (valorBoton === Partida.secuenciaSimonDice[i]) {
    anadirASecuencia();
  }
  else {
    Partida.enProgreso = false;
  }
}

function animarBoton(boton) {
  $(boton).addClass("pressed");
  
  setTimeout(() => {
    $(boton).removeClass("pressed");
  }, "100");
};

//
// **** EVENTOS BOTONES ****
//

anadirASecuencia();
compararInputConSecuencia(3);


$("#green").on("click", function () {
  animarBoton("#green");
});

$("#red").on("click", function () {
  animarBoton("#red");
});

$("#yellow").on("click", function () {
  animarBoton("#yellow");
});

$("#blue").on("click", function () {
  animarBoton("#blue");
});

// ======= LOOP DE JUEGO =======

do {
  
  compararInputConSecuencia(anadirASecuencia());

} while (Partida.enProgreso = true);
