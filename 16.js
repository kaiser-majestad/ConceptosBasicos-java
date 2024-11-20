const agregarPersona = (personas, nuevaPersona) => {
    return [...personas, nuevaPersona];
};


const personas = [
    { nombre: 'Alice', edad: 25 },
    { nombre: 'Bob', edad: 30 }
];

const nuevaPersona = { nombre: 'Charlie', edad: 20 };
const nuevoArreglo = agregarPersona(personas, nuevaPersona);
console.log(nuevoArreglo);  
