const axios = require('axios');



const getLugarLatLng = async( direccion ) => {

    
    const encodedUlr = encodeURI( direccion );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: {'X-RapidAPI-Key': 'e989975fc3msh9e60aa77e54f874p115c20jsn1b89b3b163eb'}
    });


   const resp = await instance.get();

   if(resp.data.Results.length === 0){
       throw new Error(`No hay resultado para ${ direccion }`);
   }

   const data       = resp.data.Results[0];
   const dir        = data.name;
   const lat        = data.lat;
   const lng        = data.lon;
           

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
