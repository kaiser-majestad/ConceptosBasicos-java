
let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 }
];

// Función para agregar una nueva persona
function agregarPersona(nombre, edad) {
    // Crear un nuevo objeto persona
    let nuevaPersona = {
        nombre: nombre,
        edad: parseInt(edad)
    };

    
    personas.push(nuevaPersona);
}


agregarPersona("Carlos", 28);
agregarPersona("Laura", 22);


console.log(personas);