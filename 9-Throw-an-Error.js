function handleError(error) {
    console.log(error.message);
}

//For fun
//var json = `{"name": "Ryan"}`;

Promise.resolve(process.argv[2]).then(JSON.parse).then(console.log).then(null, handleError);

//ANOTHER WAY TO DO IT
// function parsePromise(json) {
//     return new Promise(function (fulfill, reject) {
//         try {
//             var ob = JSON.parse(json);
//             fulfill(ob);
//         } catch (e) {
//             reject(e); //This passes an error to the reject method. (try catch block throws error).
//         }

//     });
// }

// parsePromise(process.argv[2]).then(null, handleError);