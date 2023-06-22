import React, { useState } from "react";
import { styled } from "styled-components";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

const StBody = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
`;

// const initialState = [
//   {
//     id: uuid(),
//     title: "title",
//     content: "content",
//     isDone: false,
//   },
//   {
//     id: uuid(),
//     title: "title",
//     content: "content",
//     isDone: true,
//   },
//   {
//     id: uuid(),
//     title: "title",
//     content: "content",
//     isDone: false,
//   },
// ];

function App() {
  // 여기에서 store에 접근하여, counter의 값을 읽어오려 할 때
  // useSelector
  const data = useSelector((state) => {
    return state;
  });

  console.log("data: ", data);

  const [todolist, setTodoList] = useState(data.todo);

  return (
    <>
      <StBody color="#cbf8e8">header</StBody>
      <StBody color="#e4e6f5">
        <Input todolist={todolist} setTodoList={setTodoList} />
        <TodoList
          todolist={todolist}
          setTodoList={setTodoList}
          listIsDone={false}
        />
        <TodoList
          todolist={todolist}
          setTodoList={setTodoList}
          listIsDone={true}
        />
      </StBody>
    </>
  );
}

export default App;
