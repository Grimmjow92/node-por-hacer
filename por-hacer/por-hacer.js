const fs = require('fs');

let listadoxhacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoxhacer);
    fs.writeFile('db/data.json', data, err => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoxhacer = require('../db/data.json');
        // console.log(listadoxhacer);
    } catch (error) {
        listadoxhacer = [];
    }

    //console.log(listadoxhacer);
}
const crear = (descripcion) => {
    cargarDB();
    let porhacer = {
        descripcion,
        completado: false
    };
    listadoxhacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const listar = () => {
    cargarDB();

    return listadoxhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoxhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoxhacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}
const borrar = (descripcion) => {
        cargarDB();

        let index = listadoxhacer.findIndex(tarea => tarea.descripcion === descripcion);

        if (index >= 0) {
            let filtered = listadoxhacer.filter(tarea => tarea.descripcion !== descripcion);
            listadoxhacer = filtered;
            guardarDB();
            return true;
        } else
            return false;

    }
    // let getListado = () => {
    //     return new Promise((resolve, reject) => {
    //         cargarDB();
    //         if (!listadoxhacer) {
    //             reject(`No se encontro ningun dato`)
    //         } else {
    //             resolve(listadoxhacer)
    //         }
    //     });
    // }
module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}