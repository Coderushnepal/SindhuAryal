import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = "blogs";

export async function create(params) {
    const [ data ] = await connection.insert(snakeize(params)).into(table).returning('*');
    
    return camelize(data);
}

export async function getAll() {
    const data = await connection.select("*").from(table);

    return camelize(data);
}

export async function getById(id) {
    const [data] = await connection.select("*").from(table).where({ id })

    return data ? camelize(data) : null;
}

export async function update(blogsId, params){
    const [updatedData] = await connection(table)
    .update(snakeize(params))
    .where({id : blogsId})
    .returning('*');

    return camelize(updatedData);
}

export async function remove(blogsId) {
    await connection(table).update({is_active:false}).where({ id: blogsId });
}