const fs = require('fs');

function leerArchivoJSON() {
    const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
    return JSON.parse(tareasJson);
}

function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}

module.exports = { 
    listar() {
        let tareas = leerArchivoJSON();
        
        tareas.forEach(tarea => {
            console.log(tarea.titulo, '(' +  tarea.estado + ')');
        });
    }
}