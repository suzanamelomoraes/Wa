import { combineReducers } from "redux";

import error from "./error";
import categories from "./categories";
import pending from "./pending";
import tasks from "./tasks";
import volunteering from "./volunteering";
import activeIndex from "./activeIndex";
import offerings from "./offerings";
import user from "./user";
import notification from "./notification";
import center from "./changeMapCenter";

export default combineReducers({
  error,
  categories,
  pending,
  tasks,
  volunteering,
  activeIndex,
  offerings,
  user,
  notification,
  center
});
