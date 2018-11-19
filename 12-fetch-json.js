const http = require("q-io/http");


//Used a random link from the byui-techops site as a JSON object that I could test this on.
http.read('https://raw.githubusercontent.com/byuitechops/canvas-search-extension/master/manifest.json')
    .then(JSON.parse)
    .then(console.log)
    .catch((error) => console.log(error.message));