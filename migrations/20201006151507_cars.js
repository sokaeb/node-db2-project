
exports.up = function(knex) {
  return knex.schema.createTable('car_details', tbl => {
      tbl.increments();
      tbl.integer('VIN').notNullable().unique().index();
      tbl.string('make', 36).notNullable();
      tbl.string('model', 36).notNullable();
      tbl.integer('mileage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car_details');
};
