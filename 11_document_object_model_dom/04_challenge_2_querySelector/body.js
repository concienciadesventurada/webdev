var x = document.firstElementChild;
console.log("En la variable x se llamo con el metodo document.firstElementChild. Se imprime en la siguiente linea:\n");
console.log(x);

var heading = document.firstElementChild.lastElementChild;

document.querySelector("input").click();

console.log("Al refrescar la pagina se selecciona la casilla por el metodo .querySelector('input').click()");

// ************** CHALLENGE *****************
// Cambiar ahora el tercer elemento de la lista por mi nombre.

document.getElementById("#tercerElemento").innerHTML = "Hola soy Matias";

// ************** CHALLENGE *****************
// Cambiar el color del texto del anchor-tag 

document.querySelector("li a").style.color = "green";
