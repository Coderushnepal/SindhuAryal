const http = require('http');
const fs = require('fs');

http.createServer((request,response) => {
    try{
        const file = fs.readFileSync('sample-text.txt');
        response.end(file.toString());
    }catch(err) {
        console.log("An error occured", err);
    }
}).listen(1234);

console.log("Server running at https://127.0.0.1:1234");