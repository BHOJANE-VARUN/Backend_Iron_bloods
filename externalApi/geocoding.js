const {links} =require("./../src/util/constants");
const axios = require("axios");
const API_KEY = process.env.API_KEY;




// address=vallabhnagar+yeola+423401&key=
const getGeocode = async (address)=>{
    const URL = links.geocoding + "address=" + address + "&key="+ API_KEY;
    const result = await axios.get(URL);
    //console.log(result.data);
    if(result.data.results.length==0)
    {
        return "Invalid";
    }
    return result.data.results[0].geometry.location;
}

module.exports = getGeocode;