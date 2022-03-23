const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption: true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'lista',
                        type:'boolean',
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                        demandOption: true,
                        describe:'Es hasta cuanto se hara la multiplicacion'
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.base)){
                            throw 'La base debe de ser un numero';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;