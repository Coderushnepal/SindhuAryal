const http = require('http');

http.createServer((request, response) => {
    response.end("This is my first http server in Node JS \n");
}).listen(1234);

console.log("Server running in https://127.0.0.1:1234");
