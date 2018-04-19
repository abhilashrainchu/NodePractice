const request = require('request');

var geocodeAddress  = (address,callback) => {

    var encodeaddress = encodeURIComponent(address);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
        JSON: true
    }, (error, response, body) => {
        if (error) {
            callback("unable to connect to servers");
        }

        else if (JSON.parse(body).status === 'ZERO_RESULTS') {
            callback("unable to find that address");


        }
        else if (JSON.parse(body).status === 'OK') {
            callback(undefined, {
                address: JSON.parse(body).results[0].formatted_address,
                latitude: JSON.parse(body).results[0].geometry.location.lat,
                longitude: JSON.parse(body).results[0].geometry.location.lng

            });

        }
    });
};
module.exports.geocodeAddress = geocodeAddress;