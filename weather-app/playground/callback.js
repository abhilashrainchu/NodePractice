var getUser =(id , callback) => {
var user = {
    id : id,
    name : 'vikram'

    };
    setTimeout(() => {
       callback(user);
    });

};




getUser(31, (userObject) => {
   console.log(userObject);
});