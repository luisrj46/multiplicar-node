/* 
 *
 *
 * 
 */
const argv = require('./config/yars').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
    // let argv2 = process.argv;
let comando = argv._[0];
// console.log(argv);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`el Archivo ${archivo} ha sido creado`.))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            // console.log('Listarrr');
        break;

    default:
        break;
}




// let valor = argv[2];
// let base = valor.split('=')[1];
// console.log(base);