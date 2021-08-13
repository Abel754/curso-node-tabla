const argv = require('yargs')
    .option('b', { 
        alias: 'base', // El seu alias
        type: 'number', // La base serà un número
        demandOption: true, // Serà obligatori
        describe: 'Es la base de la tabla de multiplicar' // Descripció
    })
    .option('l', { 
        alias: 'listar', // El seu alias
        type: 'boolean', // La base serà un número
        demandOption: true, // Serà obligatori
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', { 
        alias: 'hasta', // El seu alias
        type: 'number', // La base serà un número
        demandOption: true, // Serà obligatori
        default: 10,
        describe: 'Indica el número de máximo de veces que se multiplicará'
    })
    .check((argv, options) => { // Realitza una comprovació
        if(isNaN(argv.base)) { // Si no és un número, llança error
            throw 'La base tiene que ser un número';
        }
        return true; // Si no hi ha errors, retorna true
    })
    .argv; // .argv perquè funcioni

module.exports = argv;
    