const prm = require("Promise");

function alwaysThrows() {
    throw (new Error('OH NOES'));
}

function iterate(num) {
    console.log(num);
    return ++num;
}

function onReject(error) {
    console.log(error.message);

}

prm.resolve(1).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).catch(alwaysThrows).done(null, onReject);


//.catch(method) is equivalent to .then(null, method).
//The best explanation I got for the done is that then is to done as map is to foreach (I saw this online here: https://www.promisejs.org/). The done is the last node (there cannot be a then after a done).  It is like a leaf node.