exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Don', email: 'don@devacademy.com', mobile: 99999999, password: 'lacucaracha', balance: 3, address: '12 Morgan Street, Newmarket, 0600', latitude: -36.864500, longitude: 174.776730, image: '/images/avatar01.png' },
        { id: 2, name: 'Bryce', email: 'bryce@devacademy.com', mobile: 99999999, password: 'potatoes', balance: 3, address: '1 George Street, Newmarket, 0600', latitude: -36.864400, longitude: 174.775020, image: '/images/avatar01.png' },
        { id: 3, name: 'Emily', email: 'emily@devacademy.com', mobile: 99999999, password: 'cool', balance: 3, address: '98 Carlton Gore Road, Newmarket, 0600', latitude: -36.864900, longitude: 174.775720, image: '/images/avatar01.png' },
        { id: 4, name: 'Jess', email: 'jess@devacademy.com', mobile: 99999999, password: 'great', balance: 3, address: '424 Khyber Pass Road, Newmarket, 0600', latitude: -36.867230, longitude: 174.776860, image: '/images/avatar01.png' }
      ])
    })
}
