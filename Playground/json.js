//var object  = {

  //  name : "Abhilash"

//};

//var stingobj = JSON.stringify(object);
//console.log(typeof stingobj);
//console.log(stingobj);

const  fs = require('fs');

var a = {
    name: "Abhilash",
    course: "Database"
}
console.log(typeof a);
var astring = JSON.stringify(a);
console.log(astring);
console.log(typeof astring);
fs.writeFileSync('notes.json', astring);

var noteString = fs.readFileSync('notes.json', astring);

var note = JSON.parse(noteString);
console.log(note);
console.log(typeof note);

