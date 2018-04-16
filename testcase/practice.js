//var object = {

//    name : "bobby"
//};

//var stringobj = JSON.stringify(object);
//console.log("name", stringobj);
//console.log(typeof stringobj);

//var personString   = '{"name":"Abhilash","age":"25"}';

//var person = JSON.parse(personString);

//console.log(person);
//console.log(typeof person);cou

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





