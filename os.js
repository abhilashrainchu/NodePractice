console.log("Application Started")


const _ = require('lodash');

const fs = require('fs');
const notes = require('./notes.js')

var unique = _.uniq([2,1,2,1,3,4,3,4]);
var sub = _.without([1,2,3,4],1,2,3);
var array = [1];
var other = _.concat(array,2,3,4,5,5,5,5,5,5,);
var split = _.chunk(['a','b','c','d','e','f','g','h'],2);




console.log(_.isString(True));
console.log(_.isString("Abhilash"));

console.log(unique);
console.log(sub);
console.log(other);
console.log(split);

//console.log(res);

//console.log('result', notes.addition(6, 6));

//console.log('solution', notes.subs(9, 6));
//fs.appendFile("osfs.txt", 'hello' + user.username + 'you are ${notes.age}');



