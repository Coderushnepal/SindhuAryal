const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// app.get("/", (request, response, next) => {
//     response.json({
//         name: 'todo-api',
//         version: '1.0.0'
//     })
// })

const isValidToken = (token) => {
    return true;
}

const function1 = ( request, response, next) => {
    const requestBody = request.body;

    console.log(requestBody);

    if(!requestBody.id || !requestBody.fName || !requestBody.lName) {
        response.json({
            message: "Invalid arguments"
        });
    }

    if(!requestBody.token) {
        response.json({
             message: "Token is required."
        }); 
    }

    const isValid = isValidToken(requestBody.token);

    if(!isValid) {
        response.json({
            message: "Token is invalid."
        });
    }
    next();
}

const function2 = (request, response, next) => {
    console.log("Invoked");

    response.json({
        name: 'todo-api',
        version: '1.0.0'
    });
}

app.post("/", function1, function2);

app.get('/users', (request, response, next) => {
    const usersJson = require('./users.json');

    response.json(usersJson);
});

app.get('/users/:userId', (request, response, next) =>  {
    const userId = +request.params.userId;

    const usersJson = require('./users.json');

    const requestedUser = usersJson.find(user => user.id === userId);

    if(!requestedUser) {
        response.json({
            message: "Can't find user with id " + userId
        });
    }

    response.json(requestedUser);
});

app.listen(1234, () => {
    console.log("Server running on https://127.0.0.1:1234");
}) 