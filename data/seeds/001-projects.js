
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'Just Do It', description: 'This is a description', completed: 'false'},
        {id: 2, name: `This One's Done`, description: 'This is a description, too', completed: 'true'},
        {id: 3, name: 'Extra', description: 'This is a description as well', completed: 'false'}
      ]);
    });
};
