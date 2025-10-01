let filas = parseInt(prompt("Ingrese el número de filas:"))
let columnas = parseInt(prompt("Ingrese el número de columnas:"))
let totalCeldas = filas * columnas


document.writeln("<table border='1' style='border-collapse: collapse;'>")  
let numero = totalCeldas
for (let i = 0; i < filas; i++) {
    document.writeln("<tr>")
    for (let j = 0; j < columnas; j++) {
        document.writeln("<td style='padding: 8px; text-align: center;'>" + numero + "</td>")
        numero--
    }
    document.writeln("</tr>")
}
document.writeln("</table>")