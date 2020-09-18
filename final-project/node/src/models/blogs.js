import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = "blogs";

export async function getAll() {
    const data = await connection.select("*").from(table);

    return camelize(data);
}

export async function create(params) {
    const [ data ] = await connection.insert(snakeize(params)).into(table).returning('*');

    return camelize(data);
}