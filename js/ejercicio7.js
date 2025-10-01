let numero = parseInt(prompt("Ingresa un número (máximo 50):"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  alert("Por favor, ingresa un número válido entre 1 y 50.");
} else {
  for (let i = numero; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += i; // repetimos el número i
    }
    document.writeln(fila + "<br>");
  }
}
