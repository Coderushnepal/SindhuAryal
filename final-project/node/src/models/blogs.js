import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = 'blogs';

export async function getAll() {
  const data = await connection
    .select('id', 'title', 'desc', 'image', 'is_active', 'created_at')
    .from(table)
    .where('is_active', true);

  return camelize(data);
}

export async function getById(id) {
  const [data] = await connection
    .select('id', 'title', 'desc', 'image', 'is_active', 'created_at')
    .from(table)
    .where({ id: id, is_active: true });

  return data[0] ? camelize(data[0]) : null;
}

export async function create(params) {
  const [data] = await connection.insert(snakeize(params)).into(table).returning('*');

  return camelize(data);
}

export async function remove(blogsId) {
  await connection(table).update({ is_active: false }).where({ id: blogsId });
}

export async function update(blogsId, params) {
  const [updatedData] = await connection(table).update(snakeize(params)).where({ id: blogsId }).returning('*');

  return camelize(updatedData);
}
