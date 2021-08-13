const {crearArchivo} = require('./helpers/multiplicar'); // Com que a l'exports de multiplicar.js li hem assignat el nom de crearArchivo, l'incloem aquí
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();

// const [, , arg3 = 'base=5'] = process.argv; // process.argv és el que surt per la consola a l'executar l'aplicació. Surt un array amb informació des d'on s'executa i en la tercera posició els paràmetres que li passem en aquest cas args3
// const [, base = 5] = arg3.split('='); // Si no es passa cap paràmetre a l'executar des del cmd, agafarà la base default com a 5

console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta) // Ciridem la funció de multiplicar.js i li enviem els options creats
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));




