const calcularPromedio = arreglo => arreglo.reduce((acumulador, numero) => acumulador + numero, 0) / arreglo.length;


let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt(`Ingrese el número ${i + 1}:`)));
}
const promedio = calcularPromedio(numeros);
console.log(promedio);   