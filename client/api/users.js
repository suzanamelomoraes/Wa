import request from 'superagent'
import { getEncodedToken, getDecodedToken } from 'authenticare/client'

const apiURL = 'http://localhost:3000/api/v1'

export function getVolunteering () {
  return request
    .get(`${apiURL}/tasks/assignee/`)
    .set({ 'Accept': 'application/json' })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getOfferings () {
  return request
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .get(`${apiURL}/tasks/assigner/`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getUser () {
  return request
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .get(`${apiURL}/users/`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function geocodeAddress (details) {
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

export function addUserDetails (details, geocode) {
  return request
    .post(`${apiURL}/users`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send({ details, geocode })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
