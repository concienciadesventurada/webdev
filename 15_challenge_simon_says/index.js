// ===== OBJETO DE PARTIDA =====

const Partida = {
  enProgreso: false,
  secuenciaSimonDice: [],
  secuenciaUsuario:  [],
  nivel: 0
};

// ==== REPRODUCE SONIDOS =====

function reproducirSonido(idBoton) {
  var idSonido = idBoton.replace("#", "");
  var audio = new Audio("sounds/" + idSonido + ".mp3")
  audio.play();
}

// ==== ANIMA EL BOTON INTERACTUADO =====

function animarBoton(idBoton) {
  $(idBoton).addClass("pressed");
  
  setTimeout(() => {
    $(idBoton).removeClass("pressed");
  }, "100");
  reproducirSonido(idBoton);
};


// ===== ANADE AL ARRAY DE SECUENCIA Y ANIMA EL BOTON AGREGADO ====

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

// =====

function valorBoton(idBoton) {
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

function actualizarPartida() {
  Partida.nivel++;
  $("#estado-juego").text("Nivel " + Partida.nivel);
}

function compararInputConSecuencia(valorBoton) {
  var i = Partida.secuenciaSimonDice.length - 1;

  //console.log(Partida.secuenciaSimonDice[i]);
  
  if (valorBoton === Partida.secuenciaSimonDice[i]) {
    anadirASecuencia();
    actualizarPartida();
  }
  else {
    Partida.enProgreso = false;
    Partida.nivel = 0;
    actualizarPartida();
    Partida.secuenciaSimonDice = [];
  }

  console.log(valorBoton);
}

//
// **** EVENTOS BOTONES ****
//

$("#green").on("click", function () {
  animarBoton("#green");
  compararInputConSecuencia(valorBoton("#green"));
});

$("#red").on("click", function () {
  animarBoton("#red");
  compararInputConSecuencia(valorBoton("#red"));
});

$("#yellow").on("click", function () {
  animarBoton("#yellow");
  compararInputConSecuencia(valorBoton("#yellow"));
});

$("#blue").on("click", function () {
  animarBoton("#blue");
  compararInputConSecuencia(valorBoton("#blue"));
});


// ======= LOOP DE JUEGO =======

anadirASecuencia();
compararInputConSecuencia(0);
console.log(Partida.secuenciaSimonDice);

//do {
  
//  compararInputConSecuencia(anadirASecuencia());


//} while (Partida.enProgreso = true);
