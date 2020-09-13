const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 11,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crear archivo en de la tabla multiplicar en el equipo', opts)
    .help()
    .argv;

module.exports = {
    argv
}