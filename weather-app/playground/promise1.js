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

},(errormessage) => {

    console.log("error message");

});
