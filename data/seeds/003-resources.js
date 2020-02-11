
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {id: 1, name: 'computer', description: 'a computer, duh'},
        {id: 2, name: 'truck', description: 'a whole truck'},
        {id: 3, name: 'peasant', description: 'a low-paid worker'}
      ]);
    });
};
