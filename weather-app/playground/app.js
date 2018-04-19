const args = require('yargs');
const geocode = require('./geocode/geocode');
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
geocode.geocodeAddress(argv.address);


