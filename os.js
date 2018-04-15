console.log("Application Started")


const _ = require('lodash');
const os = require('os');
const fs = require('fs');
const notes = require('./notes.js')
var  user = os.userInfo();
var unique = _.uniq([2,1,2,1,3,4,3,4]);

//console.log(user);
//var res = notes.addNote();

//console.log(_.isString(True));
console.log(_.isString("Abhilash"));
console.log(_.isString("Abhilash"));
console.log(unique);

//console.log(res);

//console.log('result', notes.addition(6, 6));

//console.log('solution', notes.subs(9, 6));
//fs.appendFile("osfs.txt", 'hello' + user.username + 'you are ${notes.age}');



