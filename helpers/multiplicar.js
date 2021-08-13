const fs = require('fs'); // És una llibreria de Node per gravar contingut ena rxius
var colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

        try {
            let salida, consola = '';

            for (var i = 1; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
                consola += `${base} ${'x'.blue} ${i} = ${base * i}\n`; // Creem un doble perquè al posar el console.log, no ha de tenir caràcters especials (x.blue) o es bugeja el .txt
            }

            if(listar) {
                console.log('==================='.green); // El .green és de colors
                console.log('Tabla del:'.yellow, colors.blue(base));
                console.log('==================='.green);
                console.log(consola);
            }
 
            // FET AMB WRITEFILESYNC //
        
            fs.writeFileSync(`salida/tabla-${base}.txt`, salida);

            return `tabla-${base}.txt`; // És el que sortirà en el missatge then
        }
        catch(err) {
            throw err;
        }
}

module.exports = {
    crearArchivo: crearArchivo // Exportem la constant crearArchivo amb nom crearArchivo
}