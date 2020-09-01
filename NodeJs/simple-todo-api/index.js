const express = require('express');
const fs = require('fs');
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

const function1 = (request, response, next) => {
    const requestBody = request.body;
    console.log(requestBody);
    if (!requestBody.id || !requestBody.fName || !requestBody.lName) {
        response.json({
            message: "Invalid arguments"
        });
    }

    if (!requestBody.token) {
        response.json({
            message: "Token is required."
        });
    }

    const isValid = isValidToken(requestBody.token);

    if (!isValid) {
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

//Output = localhost:1234/users
app.get('/users', (request, response, next) => {
    const usersJson = require('./users.json');      //gets all data from users.json
    response.json(usersJson);                       //prints every data obtained from users.json
});


//Output = localhost:1234/users/:userId
app.get('/users/:userId', (request, response, next) => {
    const userId = +request.params.userId;
    // + : string lai number ma laijancha
    // for eg: localhost:1234/users/1 => userId = request.params.userId; userId = '1'
    // so  if userId = +request.params.userId;  then userId = 1

    const usersJson = require('./users.json');
    const requestedUser = usersJson.find(user => user.id === userId);
    if (!requestedUser) {
        response.json({
            message: "Can't find user with id " + userId
        });
    }
    response.json(requestedUser);
});

app.post('/users', (request, response, next) => {
    const params = request.body;
    if (!params.firstName || !params.lastName || !params.phoneNumbers) {
        response.json({
            message: "Insufficient number of arguments supplied."
        })
    }

    if (!Array.isArray(params.phoneNumbers)) {
        response.json({
            message: "Phone number should be an array"
        })
    }

    const usersJson = require('./users.json');
    const maxId = usersJson.reduce((acc, cur) => {
        return cur.id > acc ? cur.id : acc              //acc = number,  cur = object
    }, 0);

    const updatedJson = [
        ...usersJson,                   //users.json ma vayeko sabai data same aaucha
        {
            id: maxId + 1,
            ...params                  //requestBody (i.e.Postman) bata pathayeko data
        }
    ];

    fs.writeFileSync('./users.json', JSON.stringify(updatedJson, null, 2));
    response.json({
        message: "new user added successfully.",
        data: {
            id: maxId + 1,
            ...params
        }
    })
})

app.listen(1234, () => {
    console.log("Server running on https://127.0.0.1:1234");
}) 