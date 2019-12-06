import { combineReducers } from 'redux'

import error from './error'
import categories from './categories'
import pending from './pending'

export default combineReducers({
  error,
  categories,
  pending
})
