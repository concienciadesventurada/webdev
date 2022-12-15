$(document).ready(function () {

  // Manipular css desde jquery
  $("h1").css("color", "red");
  $("body").css("background-color", "white");

  // Anadir clase a elementos, en este caso, multiples y con jerarquia
  // P.E: id del div y dos clases
  $("#div-jquery button").addClass("btn margin-50");

  // Aunque nada que manipule la estetica de la pagina es deseable dejarselo a JS
  // ESTETICA -> CSS | FUNCIONALIDAD -> JS
  
  $(".text-jquery").text("Manipulo el contenido del texto del boton");
  $("#html-jquery").html("<em>Yo hice cursiva agregando html</em>");


  // Imprimir el valor que tiene un atributo determinado 
  console.log("A este punto no hay un link para href en el a-tag" + $("a").attr("href"));
  // Anadir ese atributo
  $("a").attr("href", "https://github.com/concienciadesventurada/");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});

// Keypress logs
$(document).keypress(function(e) {
  console.log(e.key);
});

// Actualiza el h1
$(document).keypress(function(e) {
  $("h1").text(e.key);
});

// Metodo on
$("h1").on("mouseover", function() {
  $("h1").css("color", "cyan");
});

// Crear elementos hmtl con jquery
$("h1").before("<button>Div agregado con before()</button>");
$("h1").after("<button>Div agregado con after()</button>");
$("h1").prepend("<button>Div agregado con prepend(). Antes del contenido del elemento html</button>");
$("h1").append("<button>Div agregado con append(). Despues del contenido pero antes del final del elemento html</button>");

// Animaciones simples
$(".text-jquery").on("click", function () {
  $("h1").toggle();
  //$("h1").hide();
  //$("h1").fadeOut();
  //$("h1").slideUp();
  //$("h1").slideDown();
  //$("h1").slideToggle();
});

$("#html-jquery").on("click", function () {
  $("h1").slideUp().slideDown().animate({opacity: 0.3});
});
