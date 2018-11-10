function returnNumber(x) {
    return x;
}

// Promise.resolve(3).then(returnNumber).then(console.log);

Promise.resolve(34).then(returnNumber).then(console.log)