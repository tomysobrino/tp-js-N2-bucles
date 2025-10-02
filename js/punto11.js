let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt("Ingrese la edad de " + nombre1));

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt("Ingrese la edad de " + nombre2));

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt("Ingrese la edad de " + nombre3));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
  alert("Por favor, ingrese edades válidas.");
} else {
  let mayorNombre = nombre1;
  let mayorEdad = edad1;

  if (edad2 > mayorEdad) {
    mayorNombre = nombre2;
    mayorEdad = edad2;
  }
  if (edad3 > mayorEdad) {
    mayorNombre = nombre3;
    mayorEdad = edad3;
  }

  alert("El mayor es " + mayorNombre + " con " + mayorEdad + " años.");
}
