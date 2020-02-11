
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'we doin it', notes: '', completed: 'true'},
        {id: 2, project_id: 1, description: 'we doin it more', notes: '', completed: 'false'},
        {id: 3, project_id: 2, description: 'we did it', notes: `it's done`, completed: 'true'}
      ]);
    });
};
