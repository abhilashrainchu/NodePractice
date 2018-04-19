const request = require('request');
const args  = require('yargs');
const argv = args
    .options({
       a: {
           demand: true,
           alias: 'address',
           describe: 'address to fetch weather for ',
           string: true

       }
    })
    .help()
    //.alias('help', h )
    .argv;
//console.log(argv);
var encodeaddress = encodeURIComponent(argv.a);


request({url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
    JSON: true }, (error,response,body) =>
{
        if (error) {
            console.log("unable to connect to servers");
        }
        else if(body.status === 'ZERO_RESULTS') {
            console.log("unable to find that address");

        }
        else if(body.status === 'OK') {
            console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
            console.log(`latitude: ${JSON.parse(body).results[0].geometry.location.lat}`);
            console.log(`longitude: ${JSON.parse(body).results[0].geometry.location.lng}`);
            console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
        }


    });
