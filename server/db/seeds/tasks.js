exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, cat_id: 2, assigner: 3, assignee: 4, name: 'walk with dogs', description: 'walk with dogs', status: 'completed', time: '1' },
        { id: 2, cat_id: 7, assigner: 4, assignee: 1, name: 'JavaScript classes', description: 'JavaScript classes with React, Redux', status: 'completed', time: '1' },
        { id: 3, cat_id: 12, assigner: 1, assignee: 2, name: 'surf', description: 'surf on Piha beach', status: 'completed', time: '1' }
      ])
    })
};
