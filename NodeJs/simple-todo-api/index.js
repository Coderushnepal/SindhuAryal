import express from 'express';
import bodyParser from 'body-parser';

import routes from './src/routes';

const loggingMiddleware = (req, res, next) => {
    const url = req.url;
    const method = req.method;

    console.log(`[${new Date().toISOString()}] [${method}] ${url} \n`)
    next();
}

const app = express();

app.use(bodyParser.json());
app.use(loggingMiddleware);
app.use(routes);


app.listen(1234, () => {
    console.log("Listening on https://127.0.0.1:1234 ");
}) 