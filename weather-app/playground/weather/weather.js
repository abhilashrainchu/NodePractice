var request = require('request');
var getWeather = () => {
    request({
        url: 'https://api.darksky.net/forecast/e7e7a4967053b50b33b6f7e686a94b2e/35.7085641,97.4165053', JSON: true }, (error, response, body) => {
        if (error) {
            console.log("unable to connect to servers");
        }
        else if (response.statusCode === 400) {
            console.log('unable to fetch error');

        }
        else if (response.statusCode === 200)
            console.log(JSON.parse(body).currently.temperature);
    });

};
module.exports.getWeather = getWeather();

