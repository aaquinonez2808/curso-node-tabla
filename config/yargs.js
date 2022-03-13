const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption:true,
                    describe:'Es hasta donde llega la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default:false,
                    demandOption:false,
                    describe:'Muestra la tabla en consola'
                })
                .check((argv, options) =>{
                    if(isNaN(argv.b) || isNaN(argv.h)){
                        throw 'La base o el hasta tiene que ser un numero'
                    }
                    return true
                })
                .argv;



                module.exports =argv;