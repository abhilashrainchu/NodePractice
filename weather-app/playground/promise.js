var somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //reject("i didn't fulfil the promise");
        resolve("hey, it resolved");
    },25000);

});

somePromise.then((message) => {
console.log('sucess:',message);
}, (errorMessage) => {
    console.log('error message:', errorMessage);
});