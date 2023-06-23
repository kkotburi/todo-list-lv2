import uuid from "react-uuid";

// 초기 상태값()
const initialState = [
  {
    id: uuid(),
    title: "취업",
    content: "아마존 가기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "취미",
    content: "재봉틀 배우기",
    isDone: true,
  },
  {
    id: uuid(),
    title: "여가",
    content: "김준수 뮤지컬 보러가기",
    isDone: false,
  },
];

//  Reducer : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state와 action
const initialTodo = (state = initialState, action) => {
  switch (action.type) {
    case "delete":
      return state;
    default:
      return state;
  }
};

export default initialTodo;
