function imprimirPares(limite) {
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


const limiteUsuario = prompt("Ingrese un numero");
imprimirPares(parseInt(limiteUsuario));

imprimirPares(limite);