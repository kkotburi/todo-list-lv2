import { createStore } from "redux";
import { combineReducers } from "redux";
import initialTodo from "../modules/initialTodo";

const rootReducer = combineReducers({
  initialTodo,
});
const store = createStore(rootReducer);

export default store;
