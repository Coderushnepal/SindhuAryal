/**
 * Create 'blogs' table.
 *
 * @param  knex
 */
export function up(knex) {
  return knex.schema.createTable('blogs', table => {
    table.increments('id');
    table.string('title', 200).notNull();
    table.string('image').notNull();
    table.string('desc').notNull();
    table.boolean('is_active').notNull().defaultTo(true);
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