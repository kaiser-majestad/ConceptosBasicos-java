const buscarIndice = (arreglo, valor) => arreglo.indexOf(valor);

 
const numeros = [10, 20, 30, 40, 50];
const valorUsuario = parseInt(prompt("Ingrese el número para buscar:"));
const indice = buscarIndice(numeros, valorUsuario);
console.log(`El índice del valor ${valorUsuario} es: ${indice}`);