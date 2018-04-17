console.log("Starting application");

setTimeout (() => {

    console.log("inisde of call back");
},2000);

setTimeout (() => {

    console.log("inside of another call back");
},0);






console.log("Finishing up");