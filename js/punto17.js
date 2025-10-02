let texto = prompt("Ingrese un texto:");

if (texto !== null) {
  texto = texto.toLowerCase(); 
  let vocales = "aeiou";
  let posicion = -1;
  let vocal = "";

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      posicion = i;
      vocal = texto[i];
      break; 
    }
  }

  if (posicion !== -1) {
    alert(`La vocal '${vocal}' está en la posición ${posicion}`);
  } else {
    alert("No se encontraron vocales en el texto.");
  }
}
