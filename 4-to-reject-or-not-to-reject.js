var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onFulfilled(value) {
    console.log(value);

}

function onRejected(error) {
    console.log(error.message);
}

promise.then(onFulfilled, onRejected);