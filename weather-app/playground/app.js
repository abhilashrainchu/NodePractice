const request = require('request');


request({url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombardstreet%20philadelphia",JSON: true }, (error,response,body) => {
  console.log(body);
});

