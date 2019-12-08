import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiURL = 'http://localhost:3000/api/v1'

export function getVolunteering (id) {
  return request
    .get(`${apiURL}/tasks/assignee/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getOfferings (id) {
  return request
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .get(`${apiURL}/tasks/assigner/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getUser (id) {
  return request
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .get(`${apiURL}/users/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function geoCodeAddress (details) {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  const APIKey = 'AIzaSyCbv90MWPN7pKFNYbOrbMCSsZGaWYGcc8o'
  const { street, suburb, postcode, city } = details

  const trimmedStreet = street.trim().split(' ').join('+')

  return request
    .get(`${url}${trimmedStreet}+${suburb}+${city}+${postcode}+New+Zealand&key=${APIKey}`)
    .then(res => {
      return res.body.results[0].geometry.location
    })
    .catch(err => { throw new Error(err.message) })
}

export function addUserDetails ( details, geocode) {
  const id = request.user
  return request
    .post(`${apiURL}/users/${id}`)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(details, geocode)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
