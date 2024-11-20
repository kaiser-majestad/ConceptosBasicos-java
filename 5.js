function verificarElementoEnArreglo(arreglo, numero) {
    return arreglo.includes(numero);
}

var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeroUsuario = parseInt(prompt("Ingrese un numero para ver si está en el arreglo"));

if (verificarElementoEnArreglo(arreglo, numeroUsuario)) {
    console.log(`El número ${numeroUsuario} está en el arreglo.`);
} else {
    console.log(`El número ${numeroUsuario} no está en el arreglo.`);
}