import { combineReducers } from 'redux'

import error from './error'
import categories from './categories'
import pending from './pending'
import tasks from './tasks'
import offerings from './offerings'

export default combineReducers({
  error,
  categories,
  pending,
  tasks,
  offerings
})
