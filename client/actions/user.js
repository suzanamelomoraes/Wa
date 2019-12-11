import { setError } from './error'
import * as api from '../api/users'

export const GET_USER_PENDING = 'GET_USER_PENDING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

export function getUserPending () {
  return {
    type: GET_USER_PENDING
  }
}

export function getUserSuccess (user) {
  return {
    type: GET_USER_SUCCESS,
    user
  }
}

export function getUser () {
  return dispatch => {
    dispatch(getUserPending())

    return api.getUser()
      .then(user => {
        return dispatch(getUserSuccess(user))
      })
      .catch(err => dispatch(setError(err.message)))
  }
}
