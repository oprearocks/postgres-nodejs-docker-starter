
exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id').unsigned().notNullable().primary();
    table.string('full_name').notNullable();
    table.string('occupation').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('joined_at').notNullable().defaultTo(knex.fn.now());
    table.unique('email');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('users')
};
