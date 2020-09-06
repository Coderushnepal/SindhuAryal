import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    client : process.env.DB_CLIENT,
    connection : {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    }
}

const connection = Knex(dbConfig);

export default connection;