import { createStore } from "redux";
import { combineReducers } from "redux";
// import counter from "../modules/counter";
import todo from "../modules/todo";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
