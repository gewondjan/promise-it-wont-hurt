function all(...args) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var answerArray = [];

        function incrementAndCheck(value, order) {
            answerArray[order] = value;
            counter++;
            if (counter == 2) {
                try {
                    fulfill(answerArray);
                } catch (e) {
                    reject(e);
                }
            }
        }

        args[0].then((value) => incrementAndCheck(value, 0), null).catch(onReject);
        args[1].then((value) => incrementAndCheck(value, 1), null).catch(onReject);


    });
}

function onReject(error) {
    console.log(error.message);
}

all(getPromise1(), getPromise2()).then(console.log).catch(onReject);