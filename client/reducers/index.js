import { combineReducers } from 'redux'

import error from './error'
import categories from './categories'
import pending from './pending'
import tasks from './tasks'
import activeIndex from './activeIndex'

export default combineReducers({
  error,
  categories,
  pending,
  tasks,
  activeIndex
})
