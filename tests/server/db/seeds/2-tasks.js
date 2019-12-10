exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          cat_id: 2,
          assigner: 3,
          assignee: 2,
          name: "walk with dogs",
          description: "walk with dogs",
          status: "Open",
          time: "1"
        },
        {
          id: 2,
          cat_id: 7,
          assigner: 4,
          name: "JavaScript classes",
          description: "JavaScript classes with React, Redux",
          status: "Open",
          time: "1"
        },
        {
          id: 3,
          cat_id: 12,
          assigner: 1,
          name: "surf",
          description: "surf on Piha beach",
          status: "Open",
          time: "1"
        }
      ]);
    });
};
