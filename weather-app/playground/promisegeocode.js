const  request = require('request');
var geocodeaddress = (address) => {
return new Promise((resolve,reject) => {
    var encodeaddress = encodeURIComponent(address);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
        JSON: true
    }, (error, response, body) => {
        if (error) {
            reject("unable to connect to servers");
        }

        else if (JSON.parse(body).status === 'ZERO_RESULTS') {
            reject("unable to find that address");


        }
        else if (JSON.parse(body).status === 'OK') {
            resolve({
                address: JSON.parse(body).results[0].formatted_address,
                latitude: JSON.parse(body).results[0].geometry.location.lat,
                longitude: JSON.parse(body).results[0].geometry.location.lng

            });

        }
    });



    });
};

geocodeaddress('73034').then((location)  => {
console.log(JSON.stringify(location,undefined,2));

},(errorMessage) =>
{
    console.log('error message')
});
