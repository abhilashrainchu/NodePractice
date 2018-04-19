const request = require('request');


request({url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombardstreet%20philadelphia",
    JSON: true }, (error,response,body) => {
  console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
  console.log(`latitude: ${JSON.parse(body).results[0].geometry.location.lat}`);
    console.log(`longitude: ${JSON.parse(body).results[0].geometry.location.lng}`);
    });
