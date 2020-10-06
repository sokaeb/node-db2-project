
exports.up = function(knex) {
  return knex.schema.table('car_details', tbl => {
      tbl.string('transmission-type');
  });
};

exports.down = function(knex) {
  return knex.schema.table('car_details', tbl => {
      tbl.dropColumn('transmission-type');
  });
};
