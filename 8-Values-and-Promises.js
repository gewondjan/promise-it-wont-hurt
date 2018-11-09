var attachTitle = function (name) {
    return 'DR. ' + name;

}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);