import { setError } from './error'
import * as api from '../api/users'

export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'
export const GET_VOLUNTEERING_PENDING = 'GET_VOLUNTEERING_PENDING'
export const GET_VOLUNTEERING_SUCCESS = 'GET_VOLUNTEERING_SUCCESS'

export function changeActiveTask (index) {
  return {
    type: CHANGE_ACTIVE_TASK,
    index
  }
}

export function getVolunteeringPending () {
  return {
    type: GET_VOLUNTEERING_PENDING
  }
}

export function getVolunteeringSuccess (volunteering) {
  return {
    type: GET_VOLUNTEERING_SUCCESS,
    volunteering
  }
}

export function getVolunteering (id) {
  return dispatch => {
    dispatch(getVolunteeringPending())

    return api.getVolunteering(id)
      .then(volunteering => dispatch(getVolunteeringSuccess(volunteering)))
      .catch(err => dispatch(setError(err.message)))
  }
}
