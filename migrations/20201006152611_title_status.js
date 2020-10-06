
exports.up = function(knex) {
  return knex.schema.createTable('title_status', tbl => {
      tbl.increments();
      tbl.boolean('clean').defaultTo(false);
      tbl.boolean('salvage').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('title_status');
};
