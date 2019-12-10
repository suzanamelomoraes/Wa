exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Testuser1', email: 'don@devacademy.com', mobile: 99999999, hash: 'lacucaracha', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' },
        { id: 2, name: 'Testuser2', email: 'bryce@devacademy.com', mobile: 99999999, hash: 'potatoes', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' },
        { id: 3, name: 'Testuser3', email: 'emily@devacademy.com', mobile: 99999999, hash: 'cool', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' },
        { id: 4, name: 'Testuser4', email: 'jess@devacademy.com', mobile: 99999999, hash: 'great', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' }
      ])
    })
}
