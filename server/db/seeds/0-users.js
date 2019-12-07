exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Don', email: 'don@devacademy.com', mobile: 99999999, password: 'lacucaracha', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: -36.864571, longitude: 174.776006, image: 'images/avatar01.png' },
        { id: 2, name: 'Bryce', email: 'bryce@devacademy.com', mobile: 99999999, password: 'potatoes', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: -36.861601, longitude: 174.774053, image: 'images/avatar01.png' },
        { id: 3, name: 'Emily', email: 'emily@devacademy.com', mobile: 99999999, password: 'cool', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: -36.865753, longitude: 174.779259, image: 'images/avatar01.png' },
        { id: 4, name: 'Jess', email: 'jess@devacademy.com', mobile: 99999999, password: 'great', balance: 3, address: '97 Carlton Gore Road, Newmarket, Auckland 1023', latitude: -36.864380, longitude: 174.772875, image: 'images/avatar01.png' }
      ])
    })
}
