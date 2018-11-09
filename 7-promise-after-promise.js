first().then(function (firstResults) {
    return second(firstResults);
}).then(console.log);