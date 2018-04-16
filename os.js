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
    console.log('adding new note');
    notes.addNote(argv.title, argv.body);

}
else if (command == 'list')
{
    console.log('listing all the notes');
}
else if (command == 'read')
{
    console.log('reading note');
}
else if (command == 'remove')
{
    console.log('remove the node');
}
else
{
    console.log("no command found")
}
console.log(process.argv);



