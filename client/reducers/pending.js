import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../actions/categories'

import {
  SET_ERROR
} from '../actions/error'

export default function (pending = false, action) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return true
    case GET_CATEGORIES_SUCCESS:
    case SET_ERROR:
      return false
  }
}
