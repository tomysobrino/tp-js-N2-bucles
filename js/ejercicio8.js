let numero = parseInt(prompt("Ingresa un número (máximo 50):"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  alert("Por favor, ingresa un número válido entre 1 y 50.");
} else {
  for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += j; // concatenamos desde 1 hasta i
    }
    document.writeln(fila + "<br>");
  }
}
