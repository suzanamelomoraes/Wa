import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../actions/categories'

import {
  GET_OFFERINGS_SUCCESS,
  GET_OFFERINGS_PENDING
} from '../actions/tasks'

import {
  SET_ERROR
} from '../actions/error'

export default function (pending = false, action) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
    case GET_OFFERINGS_PENDING:
      return true
    case GET_CATEGORIES_SUCCESS:
    case GET_OFFERINGS_SUCCESS:
    case SET_ERROR:
      return false
    default:
      return pending
  }
}
