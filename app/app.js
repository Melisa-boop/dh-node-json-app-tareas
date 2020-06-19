const tareas = require('./tareas');

let accion = process.argv[2];
let parametros = process.argv.slice(3);

switch (accion) {
    case undefined:
    case 'listar':
        tareas.listar();
        break;

    default:
        console.log();
        console.log('No entiendo esa acción');
}