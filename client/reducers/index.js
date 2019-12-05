import { combineReducers } from 'redux'

import error from './error'
import categories from './categories'

export default combineReducers({
  error,
  categories
})
