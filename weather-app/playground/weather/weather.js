var request = require('request');
var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e7e7a4967053b50b33b6f7e686a94b2e/${lat},${lng}`, JSON: true }, (error, response, body) => {
        if (error) {
            callback("unable to connect to servers");
        }
        else if (response.statusCode === 400) {
            callback('unable to fetch error');

        }
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: JSON.parse(body).currently.temperature,
                temperature: JSON.parse(body).currently.temperature,
                apparentTempearture: JSON.parse(body).currently.apparentTempearture,


            });
        }
            //console.log(JSON.parse(body).currently.temperature);

    });

};
module.exports.getWeather = getWeather;

