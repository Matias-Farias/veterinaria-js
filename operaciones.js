const fs = require('fs')
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevacita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };
    data.push(nuevacita);

    fs.writeFileSync('citas.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log('Cita registrada exitosamente.');

};

const leer = () => {
    
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('Citas registradas:', data);
};

module.exports = { registrar, leer };