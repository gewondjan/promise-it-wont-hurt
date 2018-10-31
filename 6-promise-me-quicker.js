var catchPromise = new Promise(function (fulfill, reject) {
    reject(new Error('I am an error'));
});

catchPromise.catch(function (error) {
    console.log(error.message);
});

var resolvePromise = Promise.resolve('Hello I am resolved');

resolvePromise.then(console.log, null);

var rejectPromise = Promise.reject(new Error('Hello I am rejected'));

rejectPromise.then(null, function (error) {
    console.log(error.message);
});