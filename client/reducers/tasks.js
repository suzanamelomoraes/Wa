import { CHANGE_ACTIVE_TASK, GET_TASKS_SUCCESS } from '../actions/tasks'

export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return action.tasks
       
    default:
      return state
  }
}