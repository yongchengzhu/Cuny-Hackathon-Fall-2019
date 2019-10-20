const axios = require('axios');

async function distance(from, to) {
    const res = await axios.get(`http://open.mapquestapi.com/directions/v2/route?to=${to}&from=${from}&key=${'y1DKQh64ebrWc3jARWqhEZeAGQE72xPa'}`);
    return res.data.route.distance;
}

module.exports = distance;