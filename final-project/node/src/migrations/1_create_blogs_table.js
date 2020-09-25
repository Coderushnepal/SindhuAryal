/**
 * Create 'blogs' table.
 *
 * @param  knex
 */
export function up(knex) {
  return knex.schema.createTable('blogs', table => {
    table.increments('id');
    table.string('title').notNull();
    table.string('image');
    table.text('desc').notNull();
    // table.string('desc').notNull();
    table.boolean('is_active').defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.raw('now()'));
  });
}

/**
 * Drop 'blogs' table.
 *
 * @param  knex
 */
export function down(knex) {
  return knex.schema.dropTable('blogs');
}
