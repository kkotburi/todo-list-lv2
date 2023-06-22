import uuid from "react-uuid";

// 초기 상태값()
const initialState = [
  {
    id: uuid(),
    title: "title",
    content: "content",
    isDone: false,
  },
  {
    id: uuid(),
    title: "title",
    content: "content",
    isDone: true,
  },
  {
    id: uuid(),
    title: "title",
    content: "content",
    isDone: false,
  },
];

//  Recuder : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state와 action
const todo = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todo;
