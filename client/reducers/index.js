import { combineReducers } from 'redux'

import error from './error'
import categories from './categories'
import pending from './pending'
import tasks from './tasks'

export default combineReducers({
  error,
  categories,
  pending,
  tasks
})
