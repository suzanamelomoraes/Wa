exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { id: 1, name: 'Automotive' },
        { id: 2, name: 'Animals and Pets' },
        { id: 3, name: 'Building and Construction' },
        { id: 4, name: 'Beauty' },
        { id: 5, name: 'Childcare' },
        { id: 6, name: 'Cleaning' },
        { id: 7, name: 'Computing' },
        { id: 8, name: 'Financial and Legal' },
        { id: 9, name: 'Health' },
        { id: 10, name: 'Teaching and Tuition' },
        { id: 11, name: 'Moving and Storage' },
        { id: 12, name: 'Sports' },
        { id: 13, name: 'Photography, Video and Event' },
        { id: 14, name: 'Outdoor and Garden' },
        { id: 15, name: 'Repairs and Maintenance' },
        { id: 16, name: 'Spiritual' }
      ])
    })
}
