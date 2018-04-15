console.log("Application Started")



const os = require('os');
const fs = require('fs');
const notes = require('./notes.js')
var  user = os.userInfo();

console.log(user);
var res = notes.addNote();

console.log(res);

console.log('result', notes.addition(6, 6));

console.log('solution', notes.subs(9, 6));
//fs.appendFile("osfs.txt", 'hello' + user.username + 'you are ${notes.age}');



