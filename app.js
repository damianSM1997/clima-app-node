const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
////una funcion async siempre regresa una promesa
//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);
//

//clima.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(direccion) => {
    //esto funsiona si las cooredenas y/o direccion existe
    //en este caso se manejara con un try catch

    try {
        // pasa la promesa que se tiene ne la parte de arriba
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        //return `El clima de ${coords.direccion} es de ${temp}.`;
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }



}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);