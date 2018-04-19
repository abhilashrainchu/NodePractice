const request = require('request');
const args  = require('yargs');
const argv = args
    .options({
       a: {
           demand: true,
           alias: 'address',
           describe: 'address to fetch wather for ',
           string: true

       }
    })
    .help()
   // .alias('help', h )
    .argv;
console.log(argv);
var encodeaddress = encodeURIComponent(argv.a);


request({url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
    JSON: true }, (error,response,body) => {
  console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
  console.log(`latitude: ${JSON.parse(body).results[0].geometry.location.lat}`);
    console.log(`longitude: ${JSON.parse(body).results[0].geometry.location.lng}`);
    console.log(`address: ${JSON.parse(body).results[0].formatted_address}`);
    });
