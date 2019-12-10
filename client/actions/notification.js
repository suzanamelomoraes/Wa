export const SET_NOTIFICATION = 'SET_NOTIFICATION'

export function setNotification (message) {
  return {
    type: SET_NOTIFICATION,
    message
  }
}

export function showNotification (message) {
  return dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(setNotification(null))
    }, 2000)
  }
}
