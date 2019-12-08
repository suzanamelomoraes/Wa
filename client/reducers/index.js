import { combineReducers } from 'redux'

import error from './error'
import categories from './categories'
import pending from './pending'
import tasks from './tasks'
import activeIndex from './activeIndex'
import offerings from './offerings'
import user from './user'

export default combineReducers({
  error,
  categories,
  pending,
  tasks,
  activeIndex,
  offerings,
  user
})
