import { SET_NOTIFICATION } from "../actions/notification";

export default function(notification = null, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.message;

    default:
      return notification;
  }
}
