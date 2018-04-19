console.log("Application Started")


const _ = require('lodash');
const yargs = require('yargs');

const fs = require('fs');
const notes = require('./notes.js');
const argv = yargs.argv;


console.log('process:' , process.argv);
console.log('yargs', argv);

var command = process.argv[2];
console.log('command:',command);
if(command == 'add')
{
   var note =  notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        console.log('--');
        console.log('title: ${note.title}');
        console.log('body: ${note.body}');

    }
    else
    {
console.log('no title taken');
    }

}
else if (command == 'list')
{
    console.log('listing all the notes');
    notes.getAll();
}
else if (command == 'read')
{
    console.log('reading note');
    notes.addNote1(argv.name,argv.number)
}
else if (command == 'remove')
{
    console.log('remove the node');
    notes.removeNote(argv.title);
}
else
{
    console.log("no command found")
}
console.log(process.argv);



