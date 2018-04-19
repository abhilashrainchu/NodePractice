const request = require('request');

var geocodeAddress  = (address) => {

    var encodeaddress = encodeURIComponent(address);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
        JSON: true
    }, (error, response, body) => {
        if (error) {
            console.log("unable to connect to servers");
        }

        else if (JSON.parse(body).status === 'ZERO_RESULTS') {
            console.log("unable to find that address");


        }
        else if (JSON.parse(body).status === 'OK') {
            console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
            console.log(`latitude: ${JSON.parse(body).results[0].geometry.location.lat}`);
            console.log(`longitude: ${JSON.parse(body).results[0].geometry.location.lng}`);
            console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
        }
    });
};
module.exports.geocodeAddress = geocodeAddress;