var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300);
});

function handleError(error) {
    console.log(error.message);
}

function doNothing(result) {
    //Do nothing

}

promise.then(doNothing, handleError);