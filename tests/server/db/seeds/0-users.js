exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Don', email: 'don@devacademy.com', mobile: 99999999, password: 'lacucaracha', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' },
        { id: 2, name: 'Bryce', email: 'bryce@devacademy.com', mobile: 99999999, password: 'potatoes', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' },
        { id: 3, name: 'Emily', email: 'emily@devacademy.com', mobile: 99999999, password: 'cool', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' },
        { id: 4, name: 'Jeya', email: 'jess@devacademy.com', mobile: 99999999, password: 'great', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: 1234, longitude: 4321, image: 'images/avatar01.png' }
      ])
    })
}
