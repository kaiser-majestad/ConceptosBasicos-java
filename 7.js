function invertirArreglo(arreglo) {
    return arreglo.reverse();
}

let arreglo = [];
for (let i = 0; i < 5; i++) {
    arreglo.push(parseInt(prompt(`Ingrese el número ${i + 1}:`)));
}
let arregloInvertido = invertirArreglo(arreglo);
console.log("El arreglo invertido es: " + arregloInvertido);