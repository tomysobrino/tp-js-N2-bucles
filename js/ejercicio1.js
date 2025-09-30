/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = parseInt(prompt("Ingresá tu edad:"));

if (isNaN(edad)) {
  document.writeln("Por favor, ingresá un número válido.");
} else {
  if (edad >= 18) {
    document.writeln("Ya podés conducir 🚗");
  } else {
    document.writeln("Todavía no podés conducir ❌");
  }
}