var somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {

        resolve("hey, it resolved");

    },25000);

});

somePromise.then((message) => {
console.log(message);
});