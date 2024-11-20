function encontrarNumeroMasGrande(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


const numeros = [];
for (let i = 0; i < 4; i++) {
    numeros.push(parseInt(prompt(`Ingrese el número ${i + 1}:`)));
}
const numeroMasGrande = encontrarNumeroMasGrande(numeros);
console.log("El número más grande es: " + numeroMasGrande);