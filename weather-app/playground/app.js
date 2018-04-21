const args = require('yargs');
const geocode = require('./geocode/geocode');
const  weather = require('./weather/weather');

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
/*geocode.geocodeAddress(argv.address, (errorMessage,results) => {
    if(errorMessage) {
        console.log(errorMessage);
    }
else{
    console.log(JSON.stringify(results,undefined,2));
    }
});*/
//weather.getWeather();









































//e7e7a4967053b50b33b6f7e686a94b2 */
/*var request = require('request');
request('https://api.darksky.net/forecast/e7e7a4967053b50b33b6f7e686a94b2e/35.7085641,97.4165053', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:',JSON.parse(body).currently.temperature ); // Print the HTML for the Google homepage.
});
*/

/*if (!error && response.statusCode === 200)
{
    console.log(JSON.parse(body).currently.temperature);

}
else
{
    console.log("unable to connect to servers");
}*/


