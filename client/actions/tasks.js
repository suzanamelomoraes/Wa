export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'
export const GET_OFFERINGS_PENDING = 'GET_OFFERINGS_PENDING'
export const GET_OFFERINGS_SUCCESS = 'GET_OFFERINGS_SUCCESS'

import  { setError } from './error'

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

export function getOfferings() {
  return dispatch => {
    dispatch(getOfferingsPending())
  }
}
