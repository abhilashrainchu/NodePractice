console.log('Starting Notes.js');



const fs = require('fs');
var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json');
         return JSON.parse(noteString);}
    catch (e){
return[];
    }

};

var saveNotes =(notes) => {

    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote  = (title, body) => {

var notes = fetchNotes();
var note = {

    title,
    body
};

    var duplicatenotes = notes.filter((note) => note.title == title);
    if(duplicatenotes == 0){
        notes.push(note);
        saveNotes();
        return note;

    }


};

var addNote1 = (name , number) => {

    console.log("reading note" , name,number);
};
var getAll = () => {
  console.log("get all functions");
};

var removeNote = (title) => {
    //console.log("removing note", title );
    var notes = fetchNotes();

};
module.exports = {

    addNote,
    addNote1,
    getAll,
    removeNote

};