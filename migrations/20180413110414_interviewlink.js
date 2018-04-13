
exports.up = function(knex, Promise) {
    knex.schema.createTable('interviewlink', (table) => {
        table.increments('id');
        table.string('link')
    })
  
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('interviewlink');
};
