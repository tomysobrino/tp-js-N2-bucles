let texto = "";
let entrada;

while (true) {
  entrada = prompt("Escribí un texto (Cancelar para salir):");
  
  if (entrada === null) {
    break; // si el usuario cancela, salimos del bucle
  }
  
  if (texto === "") {
    texto = entrada; // si es el primero, no le pongo guión
  } else {
    texto += " - " + entrada; // concateno con guión
  }
}

if (texto === "") {
  alert("No ingresaste ningún texto.");
} else {
  alert("Texto final: " + texto);
}