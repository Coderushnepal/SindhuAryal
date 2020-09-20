/**
 * Create 'admin_login' table.
 *
 * @param  knex
 */
export function up(knex) {
  return knex.schema.createTable('admin_login', table => {
    table.string('email', 100).notNull().unique();
    table.string('password', 200).notNull();
  });
}

/**
 * Drop 'admin_login' table.
 *
 * @param  knex
 */
export function down(knex) {
  return knex.schema.dropTable('admin_login');
}
