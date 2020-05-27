const axios = require('axios');



const getClima = async( lat,lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4bb8f5b085d8bd0c4458bcd0b61bc4c1&units=metric`);
    
    
    return  resp.data.main.temp;
}

module.exports = {
    getClima
}