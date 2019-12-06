exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { id: 1, name: 'Automotive' },
        { id: 2, name: 'Animals and Pets' },
        { id: 3, name: 'Building and construction' },
        { id: 4, name: 'Babysitters and nannies services' },
        { id: 5, name: 'Beauty services' },
        { id: 6, name: 'Cleaning and Domestic services' },
        { id: 7, name: 'Computing' },
        { id: 8, name: 'Financial and Legal services' },
        { id: 9, name: 'Health services' },
        { id: 10, name: 'Teaching and tuition' },
        { id: 11, name: 'Moving and Storage' },
        { id: 12, name: 'Sports' },
        { id: 13, name: 'Photography, video and event services' },
        { id: 14, name: 'Outdoor and garden' },
        { id: 15, name: 'Repairs and Maintenance' },
        { id: 16, name: 'Spiritual' }
      ])
    })
}
