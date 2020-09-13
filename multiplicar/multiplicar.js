const fs = require('fs');
const colors = require('colors');


const { resolve } = require('path');
const { rejects } = require('assert');

let listarTabla = (base, limite) => {
    console.log('------------------'.green);
    console.log(`Tabla del ${base} del 1 hasta ${limite}`.green);
    console.log('------------------'.green);
    for (let index = 1; index <= limite; index++) {
        if (index % 2 === 0) console.log(`${base} * ${index} = ${base * index }\n`.inverse);
        else console.log(`${base} * ${index} = ${base * index }\n`.rainbow);

    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`el valor ingresado '${base}' no es un numero`);
            return;
        }

        let datas = '';
        for (let index = 1; index <= limite; index++) {
            datas += `${base} * ${index} = ${base * index}\n`;

        }
        const data = new Uint8Array(Buffer.from(datas));
        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                rejects(err);
            else
                resolve(`tabla${base}.txt`.green);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}