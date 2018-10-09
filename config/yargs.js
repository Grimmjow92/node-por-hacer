const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Crea un elemento'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar un elemento', {
        descripcion,
        completado
    }).
command('borrar', 'Borra un elemento', {
        descripcion
        // ,completado: {
        //     default: true,
        //     alias: 'c',
        //     desc: 'Marca como completado la tarea'
        // }
    })
    .help()
    .argv;

module.exports = {
    argv
}