export const SET_NOTIFICATION = "SET_NOTIFICATION";

export function setNotification(message) {
  return {
    type: SET_NOTIFICATION,
    message
  };
}
