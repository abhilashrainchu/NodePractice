const Chance = require('chance'),
    chance = new Chance();

//console.log(chance.zip());

var params = {
    formatted: false,
    country: 'fr'
};
console.log(chance.phone(params));



var repeat = require('repeat-string');
console.log(repeat('A', 5));
