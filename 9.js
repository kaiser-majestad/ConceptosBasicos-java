const transformarNombresAMayusculas = nombres => nombres.map(nombre => nombre.toUpperCase());

let nombres = prompt("Ingrese los nombres ").split(",");
let nombresEnMayusculas = transformarNombresAMayusculas(nombres);
console.log("Los nombres en mayúsculas son: " + nombresEnMayusculas);