import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = "blogs";

/**
 * Model to get all Blogs.
 */
export async function getAll() {
  const data = await connection.select("*").from(table);

  return camelize(data);
}