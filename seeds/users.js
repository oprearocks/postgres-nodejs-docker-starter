
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'adrian@oprea.rocks',
          password: 'ItSaSecret', // Never store passwords in plain text!
          full_name: 'Adrian Oprea',
          occupation: 'developer'
        }
      ]);
    });
};
