const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=71cba5f81f345f08d668c410e13157d7&units=metric`)
    return resp.data.main.temp;
}



module.exports = {
    getClima
}