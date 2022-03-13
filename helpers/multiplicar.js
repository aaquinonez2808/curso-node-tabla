
const fs = require('fs');
const colors = require('colors');

crearArchivo = (base = 5,l=false, hasta) => {

    const promesa = new Promise((resolve, reject) => {
        
        salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += ((`${base} x ${i} = ${base * i}\n`));
            consola += ((`${colors.yellow(base)} ${colors.blue('x')} ${colors.magenta(i)} = ${colors.cyan(base * i)}\n`));
        }   
        if(l){
            console.log("==========================");
            console.log(`\tTabla del: ${base}`)
            console.log("==========================");
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);

    })
    return promesa;

}

module.exports = {
    crearArchivo
}