import { createStore } from "redux";
import { combineReducers } from "redux";
import initialTodo from "../modules/initialTodo";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  initialTodo,
  counter,
});
const store = createStore(rootReducer);

export default store;
