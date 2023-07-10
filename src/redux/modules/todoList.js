import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    title: "Job",
    content: "Frontend Developer",
    isDone: false,
  },
  {
    id: uuid(),
    title: "Hobby",
    content: "Sewing",
    isDone: true,
  },
  {
    id: uuid(),
    title: "Culture",
    content: "A musical starring XIA",
    isDone: false,
  },
];

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todoList;
