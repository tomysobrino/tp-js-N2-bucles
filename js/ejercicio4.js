let suma = 0;
let entrada;

while (true) {
  entrada = prompt("Ingresá un número (Cancelar para salir):");

  if (entrada === null) {
    break; // Si el usuario cancela, se corta el bucle
  }

  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("⚠️ Eso no es un número válido, probá de nuevo.");
  } else {
    suma += numero; // Se va acumulando
  }
}

alert("La suma total de los números introducidos es: " + suma);