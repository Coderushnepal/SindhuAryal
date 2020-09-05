import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table= 'users_phn_no';

export async function add(params) {
    const insertData = snakeize(params);
    const [result] = await connection.batchInsert(table, insertData);
  
    return camelize(result);
}