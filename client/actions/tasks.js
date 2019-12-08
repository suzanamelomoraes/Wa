import { setError } from './error'
import * as api from '../api/users'

export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'
export const GET_OFFERINGS_PENDING = 'GET_OFFERINGS_PENDING'
export const GET_OFFERINGS_SUCCESS = 'GET_OFFERINGS_SUCCESS'

export function changeActiveTask (index) {
  return {
    type: CHANGE_ACTIVE_TASK,
    index
  }
}

export function getOfferingsPending () {
  return {
    type: GET_OFFERINGS_PENDING
  }
}

export function getOfferingsSuccess (offerings) {
  return {
    type: GET_OFFERINGS_SUCCESS,
    offerings
  }
}

export function getOfferings (id) {
  return dispatch => {
    dispatch(getOfferingsPending())

    return api.getOfferings(id)
      .then(offerings => dispatch(getOfferingsSuccess(offerings)))
      .catch(err => dispatch(setError(err.message)))
  }
}
