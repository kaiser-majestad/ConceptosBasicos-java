const eliminarDuplicados = arreglo => {
    let objeto = {};
    arreglo.forEach(num => objeto[num] = true);
    return Object.keys(objeto).map(Number);
};

let arreglo = prompt("Ingrese los números del arreglo:").split(",").map(Number);
let arregloSinDuplicados = eliminarDuplicados(arreglo);
console.log("El arreglo sin duplicados es: " + arregloSinDuplicados);