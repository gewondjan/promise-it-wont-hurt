var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

promise.then(console.log, null);

console.log('MAIN PROGRAM');

//Promises are asynchronous which means that the event loop will go through and eat up all the code, and then the promise will execute when the browser is left