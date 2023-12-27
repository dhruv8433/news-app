import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { favReducer } from "./FavReducer";

// combined reducers
export const rootReducer = combineReducers({
  auth: authReducer,
  fav: favReducer,
});
