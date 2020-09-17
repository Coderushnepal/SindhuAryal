import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import logger from './utils/logger';

const loggingMiddleware = (req, res, next) => {
   const url = req.url;
   const method = req.method;

   logger.info(`${method} ${url}`);
   
   next();
}


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(loggingMiddleware);
app.use(routes);

dotenv.config();

app.listen(process.env.PORT, () => {
   logger.info(`Listening on port ${process.env.PORT}`);
});  