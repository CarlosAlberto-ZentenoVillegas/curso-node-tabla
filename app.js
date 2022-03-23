
//const { options, boolean } = require('yargs');
const{crearArchivo} = require('./helpers/multiplicar');
const colores = require('colors');
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base yargs:', argv.base);

/*
const[ , , arg3 ='base=3'] = process.argv;
const [ , base=3] = arg3.split('=');
 console.log(base);
*/
//console.log(process.argv);

//const base=5;


//Con promesas
crearArchivo(argv.base, argv.lista, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));