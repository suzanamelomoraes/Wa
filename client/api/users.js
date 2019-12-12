import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiURL = 'http://localhost:3000/api/v1'

export function getVolunteering () {
  return request
    .get(`${apiURL}/tasks/assignee`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getOfferings () {
  return request
    .get(`${apiURL}/tasks/assigner`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getUser () {
  return request
    .get(`${apiURL}/users`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getUserById (userId) {
  return request
    .get(`${apiURL}/users/${userId}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function geocodeAddress (details) {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  const APIKey = 'AIzaSyCbv90MWPN7pKFNYbOrbMCSsZGaWYGcc8o'
  const { street, suburb, city } = details

  const trimmedStreet = street.trim().split(' ').join('+')

  return request
    .get(`${url}${trimmedStreet}+${suburb}+${city}+New+Zealand&key=${APIKey}`)
    .then(res => {
      return {
        geolocation: res.body.results[0].geometry.location,
        address: res.body.results[0].formatted_address
      }
    })
    .catch(err => { throw new Error(err.message) })
}

export function addUserDetails (addressDetails, mobile, email) {
  return request
    .post(`${apiURL}/users`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send({ addressDetails, mobile,email })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
