// const qhttp = require('q-io/http');
// qhttp.read('http://localhost:7000').then(function (returnedId) {
//         return qhttp.read('http://localhost:7001/' + returnedId);
//     }).then(JSON.parse)
//     .then(console.log)
//     .catch(console.log);



const http = require('q-io/http');
http.read('http://localhost:7000').then(function (returnedId) {
    http.read('http://localhost:7001/' + returnedId)
        .then((response) => response.toString('utf8'))
        .then(JSON.parse)
        .then(console.log)
        .catch((error) => console.log(error.message));
}).catch((error) => (console.log(error.message)));



// var qhttp = require('q-io/http');
// qhttp.read("http://localhost:7000/")
//     .then(function (id) {
//         return qhttp.read("http://localhost:7001/" + id);
//     })
//     .then(function (json) {
//         console.log(JSON.parse(json));
//     })
//     .then(null, console.error)
//     .done();