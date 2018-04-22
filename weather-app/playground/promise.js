var async  =(a,b)=> {
    return new  Promise((resolve, reject) => {
        setTimeout (() => {
            if (typeof a === 'number' && typeof b === 'number')
            {
                resolve(a+b);
            }
            else
            {
                reject('arguemnts must be number');
            }
        },1000);


    });

};

async(5,6).then ((res) => {
    console.log('result:', res);
    //console.log(res);
    return async(res,33);

},(errormessage) => {

    console.log("error message");

}).then((res) => {
    console.log(res);
},(errorMessage) => {
    console.log(errormessage);
    }
);

/*var somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //reject("i didn't fulfil the promise");
        resolve("hey, it resolved");
    },25000);

});

somePromise.then((message) => {
console.log('sucess:',message);
}, (errorMessage) => {
    console.log('error message:', errorMessage);
});*/