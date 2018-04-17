console.log('Starting Notes.js');



const fs = require('fs');
var addNote  = (title, body) => {

var notes = [];
var note = {

    title,
    body
};
try{
var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);}
    catch (e){

    }
    var duplicatenotes = notes.filter((note) => note.title == title);
    if(duplicatenotes == 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }


};

var addNote1 = (name , number) => {

    console.log("reading note" , name,number);
};
var getAll = () => {
  console.log("get all functions");
};

var removeNote = (title) => {
    console.log("removing note", title );
};
module.exports = {

    addNote,
    addNote1,
    getAll,
    removeNote

};