function all(...args) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var answerArray = [];

        function incrementAndCheck(value, order) {
            answerArray[order] = value;
            counter++;
            if (counter == args.length) {
                try {
                    fulfill(answerArray);
                } catch (e) {
                    reject(e);
                }
            }
        }

        args.forEach(function (promise, index) {
            promise.then((value) => incrementAndCheck(value, index), null).catch(onReject);
        });


    });
}

function onReject(error) {
    console.log(error.message);
}

//Made code so that you can add as many promises as you would like.
all(getPromise1(), getPromise2()).then(console.log).catch(onReject);