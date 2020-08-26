const http = require('http');
const fs = require('fs');

http.createServer((request,response) => {
    console.log("Request started");    //1
    const file =  fs.readFile('sample-text.txt', (err, data) => {
        
        if(err) {
            console.log("An error occured", err);
        }
        console.log("File extracted Successfully"); //3 (kaam sakke pachi balla aauncha)
       
        response.end(data.toString());
        } );     

        console.log("Last line of code");  //2 (async-> doesnt wait until file is completely extracted) 

}).listen(1234);

console.log("Server running at https://127.0.0.1:1234");