for (let i = 1; i <= 500; i++) {
  let mensaje = i;

  if (i % 4 === 0) {
    mensaje += " (Múltiplo de 4)";
  }
  if (i % 9 === 0) {
    mensaje += " (Múltiplo de 9)";
  }

  document.writeln(mensaje + "<br>");


  if (i % 5 === 0) {
    document.writeln("————————————————————-<br>");
  }
}
