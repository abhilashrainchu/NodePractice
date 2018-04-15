console.log("Application Started")



const os = require('os');
const fs = require('fs');
var  user = os.userInfo();

console.log(user);

fs.appendFile("osfs.txt", 'hello' + user.username);



