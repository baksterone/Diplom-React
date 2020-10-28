import { combineReducers } from "redux";
import profile from "./profile";
import authorize from "./authorize";
import articles from "./articles";

export const Reducers = combineReducers({
  authorize: authorize,
  articles: articles,
  profile: profile,
});
