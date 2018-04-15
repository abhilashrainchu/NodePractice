console.log("Application Started")


const _ = require('lodash');

const fs = require('fs');
const notes = require('./notes.js')


var command = process.argv[2];
console.log('command:',command);
if(command == 'add')
{
    console.log('adding new note');

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



