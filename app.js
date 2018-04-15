console.log("application Started");


const fs = require('fs');

fs.appendFile('Greeting.txt','Hello world', function(err) {
    if (err) {
        console.log("unable write into the file");
    }

})






