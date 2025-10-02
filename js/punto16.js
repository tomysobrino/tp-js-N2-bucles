let texto = prompt("Ingrese un texto:");
if (texto !== null) {
  let invertido = texto.split("").reverse().join("");
  document.writeln(invertido);
}
