
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interviewlink').del()
    .then(function () {
      // Inserts seed entries
      return knex('interviewlink').insert([
        {link: 'http://data.www.com'},
        {link: 'http://data2.www.com'}
        
      ]);
    });
};
