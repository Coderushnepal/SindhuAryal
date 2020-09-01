const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { response } = require('express');
const { request } = require('http');

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


/**GET METHOD */
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


/**Post Method */
//Output = localhost:1234/users
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

/**DELETE Method
 * localhost:1234/users/3
 */
app.delete('/users/:userId', (req, res, next)=> {
    const userId= +req.params.userId;
    const usersJson = require('./users.json');

    const updatedUserList = usersJson.filter(user => user.id !== userId);

    const doesUserExist = usersJson.find((user) => user.id === userId);
    if (!doesUserExist) {
      response.json({
        message: "Cannot find user with id " + userId,
      })
    }

    fs.writeFileSync('./users.json', JSON.stringify(updatedUserList, null, 2));
    response.json({
        message:"Deleted user with userid" + userId,
    })
})

// app.delete('/users/:userId', (request, response, next) =>
//   //users.json ko data leyera id mileko data lai bhanda aaru lai array ma leyera with filter file ma write garchaam
//   {
//     const userId = +request.params.userId;
//     //request.params.userId bata string aauchha teslai number banauna we use +
    // const doesUserExist = usersJson.find((user) => user.id === userId);
    // if (!doesUserExist) {
    //   response.json({
    //     message: "Cannot find user with id " + userId,
    //   });
//     }
//     //The filter() method creates an array filled with all array elements that pass a test
//     //updatedlist ma chain array nai aauchha jun array ma delete gareko userId wala data hudaina
//     const updatedUsersList = usersJson.filter((user) => user.id !== userId);
//     fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));
//     response.json({
//       message: "Deleted user with id" + userId,
//     });
//   }
// );

/**PUT Method
 * localhost:1234/users/2
 */
app.put('/users/:userId', (request, response, next) => {
    const params = request.body;    //postman bata pathaune data
    const userId = +request.params.userId;   //localhost:1234/users/2 i.e. requested params ko specific  field userId tanne

    const usersJson = require('./users.json');  
    const updatedJson = usersJson.map(user => {
        if (user.id === userId){    //user.jsonma vako id ra requested id matched cha vane
            return {
                ...user,            //users.json ko data sabai same lera aauncha
                ...params           //postman bata fetch gareko naya data le replace garcha
            }
        }
        return user;        //if naya data chaina vane users.json ko data nai return garcha
    })

    fs.writeFileSync('./users.json', JSON.stringify(updatedJson, null, 2));
    response.json({
        message: "Updated Json with user id " + userId
    })
} )



app.listen(1234, () => {
    console.log("Listening on https://127.0.0.1:1234 ");
}) 