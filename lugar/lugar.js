const axios = require('axios');
//esta es la forma de ocuparta y la sintaxis es asi por ser una funcion
//esto sera una funcion asyncrona
const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '2ded5bd060msh2e5bfa36a94e175p1c1d70jsna0c0ad73800d' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }
    // linea para que solo te arroge el primer dato de la api llamada Result
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}


//    instance.get()
//        //esto es porque solo importa la data de la api
//        //el Results es porque es la unica parte que nos importa y se implementa asi Results[0]
//        .then(resp => {
//
//            console.log(resp.data.Results[0]);
//        }).catch(err => {
//            console.log('Error !!!!', err);
//        });